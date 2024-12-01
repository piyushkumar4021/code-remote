import { TJobItem } from '../lib/types';
import { BASE_API_URL } from '../lib/constants';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const getJobItems = async (query: string): Promise<TJobItem[]> => {
  const resp = await fetch(`${BASE_API_URL}?search=${query}`);

  if (!resp.ok) {
    const error = await resp.json();
    throw new Error(error.description);
  }

  const data = await resp.json();
  return data.jobItems;
};

export default function useJobItemsFromQuery(query: string) {
  const { data, isInitialLoading } = useQuery({
    queryKey: ['job-items', query],
    queryFn: () => getJobItems(query),
    refetchOnWindowFocus: false,
    enabled: Boolean(query),
    retry: false,
    staleTime: 1000 * 60 * 60,
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return { jobItems: data || [], isLoading: isInitialLoading } as const;
}
