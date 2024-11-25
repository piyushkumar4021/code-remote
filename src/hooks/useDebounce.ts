import { useEffect, useState } from 'react';

function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerID = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timerID);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
