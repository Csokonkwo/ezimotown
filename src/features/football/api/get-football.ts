import { queryOptions, useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api-client';
import { FootballPosts } from '@/types/api';
import { QueryConfig } from '@/lib/react-query';

export const getFootball = (): Promise<{ data: FootballPosts }> => {
  return api.get('/football-posts');
};

export const getFootballQueryOptions = () => {
  return queryOptions({
    queryKey: ['football'],
    queryFn: () => getFootball(),
  });
};

type UseFootballOptions = {
  queryConfig?: QueryConfig<typeof getFootballQueryOptions>;
};

export const useFootball = ({ queryConfig = {} }: UseFootballOptions = {}) => {
  return useQuery({
    ...getFootballQueryOptions(),
    ...queryConfig,
  });
};
