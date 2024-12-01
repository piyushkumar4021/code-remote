import { useQueries } from '@tanstack/react-query';
import { getJobItem } from './useJobItem';

function useJobItemsFromIds(ids: number[]) {
  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ['job-item', id],
      queryFn: () => getJobItem(id),
      enabled: Boolean(id),
      retry: false,
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
    })),
  });

  const bookmarkJobItems = results
    .map((resp) => resp.data)
    .filter((jobItem) => jobItem !== undefined);
  const isLoading = results.some((resp) => resp.isLoading);

  return { bookmarkJobItems, isLoading };
}

export default useJobItemsFromIds;
