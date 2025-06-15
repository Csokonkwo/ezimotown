import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { Post } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getPost = ({
  slug,
}: {
  slug: string;
}): Promise<{ data: Post }> => {
  return api.get(`/post/${slug}`);
};

export const getPostQueryOptions = (slug: string) => {
  return queryOptions({
    queryKey: ['posts', slug],
    queryFn: () => getPost({ slug }),
  });
};

export type UsePostOptions = {
  slug: string;
  queryConfig?: QueryConfig<typeof getPostQueryOptions>;
};

export const usePost = ({ slug, queryConfig }: UsePostOptions) => {
  return useQuery({
    ...getPostQueryOptions(slug),
    ...queryConfig,
  });
};
