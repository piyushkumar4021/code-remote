import { BASE_API_URL } from '../lib/constants';
import { TJobItemExpanded } from '../lib/types';
import { useQuery } from '@tanstack/react-query';

export const getJobItem = async (id: number): Promise<TJobItemExpanded> => {
  const resp = await fetch(`${BASE_API_URL}/${id}`);
  const data = await resp.json();
  return data.jobItem;
};

function useJobItem(id: number | null) {
  const { data, isInitialLoading } = useQuery({
    queryKey: ['job-item', id],
    queryFn: () => (id ? getJobItem(id) : null),
    enabled: Boolean(id),
    retry: false,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });

  return [data, isInitialLoading] as const;
}

export default useJobItem;
