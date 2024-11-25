import { useState, useEffect } from 'react';

function useActiveId() {
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const hashchange = () => {
      const id = +window.location.hash.slice(1);
      setActiveId(id);
    };
    hashchange();

    window.addEventListener('hashchange', hashchange);

    return () => removeEventListener('hashchange', hashchange);
  }, []);

  return activeId;
}

export default useActiveId;
