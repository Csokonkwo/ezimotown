import { queryOptions, useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api-client';
import { FootballPosts, HistoryPosts } from '@/types/api';
import { QueryConfig } from '@/lib/react-query';

export const getHistory = (): Promise<{ data: HistoryPosts }> => {
  return api.get('/culture-posts');
};

export const getHistoryQueryOptions = () => {
  return queryOptions({
    queryKey: ['history'],
    queryFn: () => getHistory(),
  });
};

type UseHistoryOptions = {
  queryConfig?: QueryConfig<typeof getHistoryQueryOptions>;
};

export const useHistory = ({ queryConfig = {} }: UseHistoryOptions = {}) => {
  return useQuery({
    ...getHistoryQueryOptions(),
    ...queryConfig,
  });
};
