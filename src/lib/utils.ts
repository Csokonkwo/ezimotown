import Cookies from 'js-cookie';

export const setCookie = (
  key: string,
  value: unknown,
  options: Cookies.CookieAttributes = {},
) => {
  Cookies.set(
    key,
    typeof value === 'string' ? value : JSON.stringify(value),
    options,
  );
};

export const getCookie = <T>(key: string): T | null => {
  const value = Cookies.get(key);
  return value ? (value as T) : null;
};
