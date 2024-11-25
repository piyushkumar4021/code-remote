import { useEffect, useState } from 'react';
import { BASE_API_URL } from '../lib/constants';
import { TJobItemExpanded } from '../lib/types';

function useJobItem(id: number | null) {
  const [jobItem, setJobItem] = useState<TJobItemExpanded | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!id) return;

    async function getJobItem() {
      setIsLoading(true);

      const resp = await fetch(`${BASE_API_URL}/${id}`);
      const data = await resp.json();

      setJobItem(data.jobItem);
      setIsLoading(false);
    }
    getJobItem();
  }, [id]);

  return [jobItem, isLoading] as const;
}

export default useJobItem;
