import { useState, useEffect } from 'react';
import { TJobItem } from '../lib/types';
import { BASE_API_URL } from '../lib/constants';

export default function useJobItem(query: string) {
  const [jobItems, setJobItems] = useState<TJobItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const totalResults = jobItems.length;
  const jobItemsSliced = jobItems.slice(0, 7);

  useEffect(() => {
    async function getJobItems() {
      if (!query) return;

      setIsLoading(true);

      const resp = await fetch(`${BASE_API_URL}?search=${query}`);
      const data = await resp.json();

      setJobItems(data.jobItems);
      setIsLoading(false);
    }

    getJobItems();
  }, [query]);

  return { jobItemsSliced, isLoading, totalResults } as const;
}
