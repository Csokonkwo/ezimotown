export const paths = {
  home: {
    getHref: () => '/',
  },
  ourHistory: {
    getHref: () => '/our-history',
  },
  iyiNzu: {
    getHref: () => '/iyi-nzu',
  },
  carnival: {
    getHref: () => '/carnival',
  },
  football: {
    getHref: () => '/football',
  },
  marathon: {
    getHref: () => '/marathon',
  },
  blogs: {
    getHref: () => '/blogs',
  },
  blog: {
    getHref: (slug: string) => `/blogs/${slug}`,
  },
  posts: {
    getHref: () => `/posts`,
  },
  post: {
    getHref: (slug: string) => `/posts/${slug}`,
  },

  auth: {
    register: {
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    login: {
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
  },
} as const;
