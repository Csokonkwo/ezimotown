import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { Posts } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getPosts = (): Promise<{ data: Posts[] }> => {
  return api.get('/get-post');
};

export const getPostsQueryOptions = () => {
  return queryOptions({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  });
};

type UsePostsOptions = {
  queryConfig?: QueryConfig<typeof getPostsQueryOptions>;
};

export const useGetPosts = ({ queryConfig = {} }: UsePostsOptions = {}) => {
  return useQuery({
    ...getPostsQueryOptions(),
    ...queryConfig,
  });
};
