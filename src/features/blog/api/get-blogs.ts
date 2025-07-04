import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { BlogPosts } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getBlogPosts = (): Promise<{ data: BlogPosts }> => {
  return api.get('/blog-posts');
};

export const getBlogPostsQueryOptions = () => {
  return queryOptions({
    queryKey: ['blogs'],
    queryFn: () => getBlogPosts(),
  });
};

type UseBlogPostsOptions = {
  queryConfig?: QueryConfig<typeof getBlogPostsQueryOptions>;
};

export const useGetBlogPosts = ({
  queryConfig = {},
}: UseBlogPostsOptions = {}) => {
  return useQuery({
    ...getBlogPostsQueryOptions(),
    ...queryConfig,
  });
};
