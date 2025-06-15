import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { MarathonPosts } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getMarathon = (): Promise<{ data: MarathonPosts[] }> => {
  return api.get('/marathon-posts');
};

export const getMarathonQueryOptions = () => {
  return queryOptions({
    queryKey: ['marathon'],
    queryFn: () => getMarathon(),
  });
};

type UseMarathonOptions = {
  queryConfig?: QueryConfig<typeof getMarathonQueryOptions>;
};

export const useMarathon = ({ queryConfig = {} }: UseMarathonOptions = {}) => {
  return useQuery({
    ...getMarathonQueryOptions(),
    ...queryConfig,
  });
};
