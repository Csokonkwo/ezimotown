import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { WaterFallPosts } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getWaterfall = (): Promise<{ data: WaterFallPosts[] }> => {
  return api.get('/waterfall-posts');
};

export const getWaterfallQueryOptions = () => {
  return queryOptions({
    queryKey: ['waterfall'],
    queryFn: () => getWaterfall(),
  });
};

type UseWaterfallOptions = {
  queryConfig?: QueryConfig<typeof getWaterfallQueryOptions>;
};

export const useWaterfall = ({
  queryConfig = {},
}: UseWaterfallOptions = {}) => {
  return useQuery({
    ...getWaterfallQueryOptions(),
    ...queryConfig,
  });
};
