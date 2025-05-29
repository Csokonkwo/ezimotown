import { AuthResponse, User } from '@/types/api';
import { usePathname, useRouter } from 'next/navigation';
import { z } from 'zod';
import { api } from './api-client';
import Cookies from 'js-cookie';
import { configureAuth } from 'react-query-auth';
import { useEffect } from 'react';
import { paths } from '@/config/paths';
import { useUserStore } from '@/hooks/user-store';
import { setCookie } from './utils';

const getUser = async (): Promise<User | null> => {
  const token = Cookies.get('accessToken');
  if (!token) {
    console.log('No token found, skipping user fetch');
    return null;
  }

  try {
    const response = (await api.get('/auth/profile')) as { data: User };
    return response?.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};

// export const refreshToken = async ():Promise<AuthResponse> => {
//   const refreshToken = Cookies.get('refreshToken');
//   if (!refreshToken) throw new Error('No refresh token available');

//   const response = await api.post(`/auth/refresh-token`, {
//     refresh_token: refreshToken,
//   });
//   const newAccessToken =  await response?.data.access_token;
//   Cookies.set('accessToken', newAccessToken, { expires: 1 });
//   return newAccessToken;
// };

export const loginInputSchema = z.object({
  email: z.string().min(5, 'Email is required').email('Invalid email address'),
  password: z.string().min(6, 'password is required'),
});

export type LoginInput = z.infer<typeof loginInputSchema>;

const loginWithEmailAndPassword = (data: LoginInput): Promise<AuthResponse> => {
  const loginData = {
    ...data,
    email: data.email.toLowerCase(),
  };
  return api.post('/auth/login', loginData);
};

export const registerInputSchema = z
  .object({
    name: z.string().min(3, 'First Name field is required'),
    last_name: z.string().min(3, 'Last Name field is required'),
    email: z
      .string()
      .min(5, 'Email field is required')
      .email('Invalid email address'),
    password: z.string().min(6, 'required'),
    password_confirmation: z.string().min(6, 'required'),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'passwords must match',
    path: ['password_confirmation'],
  });

export type RegisterInput = z.infer<typeof registerInputSchema>;

const registerWithEmailAndPassword = (
  data: RegisterInput,
): Promise<AuthResponse> => {
  return api.post('/auth/register', data);
};

const logout = async (): Promise<void> => {
  try {
    await api.patch('/auth/logout');
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    Cookies.remove('zelfarms_session');
    localStorage.clear();
    sessionStorage.clear();
  } catch (error) {
    console.error('error during logout', error);
    throw error;
  }
};

const authConfig = {
  userFn: getUser,
  loginFn: async (data: LoginInput) => {
    const response = await loginWithEmailAndPassword(data);
    const { user, access_token, refresh_token } = response?.data;
    if (access_token && refresh_token) {
      setCookie('accessToken', access_token, { expires: 1 });
      setCookie('refreshToken', refresh_token, { expires: 7 });
      localStorage.setItem('user', JSON.stringify(user));
    }
    return response?.data?.user;
  },
  registerFn: async (data: RegisterInput) => {
    const response = await registerWithEmailAndPassword(data);
    return response?.data?.user;
  },
  logoutFn: logout,
};

export const { useUser, useLogin, useLogout, useRegister, AuthLoader } =
  configureAuth(authConfig);

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!user.data) {
      router.replace(paths.auth.login.getHref(pathname));
    }
  }, [user.data, router, pathname]);

  return children;
};
