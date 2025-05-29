export type BaseEntity = {
  // id?: string;
  // created_at?: string;
};

export type Entity<T> = {
  [K in keyof T]: T[K];
} & BaseEntity;

export type Meta = {
  page: number;
  total: number;
  totalPages: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  gender?: null;
  dob?: null;
  email_verified_at: string;
  deleted_at?: null;
  created_at: string;
  updated_at: string;
};

export type Setting = Entity<{
  id: string;
  site_name: string;
  app_name: string;
  site_email: string;
  support_email: string;
  site_logo: string;
  app_logo: string;
  site_phone: string;
  address: string;
  site_favicon: string;
  app_icon: string;
  deleted_at?: string;
  created_at: string;
  updated_at: string;
}>;

export type Verify = {
  email: string;
  type: string;
  otp: string;
};
export type Resend = {
  email: string;
  type: string;
};

export type AuthResponse = {
  data: {
    user: User;
    access_token: string;
    refresh_token: string;
  };
};
