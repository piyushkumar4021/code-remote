import useActiveId from './useActiveId';
import useJobItem from './useJobItem';

function useActiveJobItem() {
  const activeId = useActiveId();

  return useJobItem(activeId);
}

export default useActiveJobItem;
