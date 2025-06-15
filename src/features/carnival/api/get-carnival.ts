import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { CarnivalPosts } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getCarnival = (): Promise<{ data: CarnivalPosts[] }> => {
  return api.get('/carnival-posts');
};

export const getCarnivalQueryOptions = () => {
  return queryOptions({
    queryKey: ['carnival'],
    queryFn: () => getCarnival(),
  });
};

type UseCarnivalOptions = {
  queryConfig?: QueryConfig<typeof getCarnivalQueryOptions>;
};

export const useCarnival = ({ queryConfig = {} }: UseCarnivalOptions = {}) => {
  return useQuery({
    ...getCarnivalQueryOptions(),
    ...queryConfig,
  });
};
