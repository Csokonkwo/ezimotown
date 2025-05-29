import Cookies from 'js-cookie';

export const setCookie = (key: string, value: any, options = {}) => {
  Cookies.set(key, value, options);
};

export const getCookie = <T>(key: string): T | null => {
  const value = Cookies.get(key);
  return value ? (value as T) : null;
};
