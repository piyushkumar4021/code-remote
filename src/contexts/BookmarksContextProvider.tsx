import { createContext, ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import useJobItemsFromIds from '../hooks/useJobItemsFromIds';
import { TJobItemExpanded } from '../lib/types';

type TBookmarksContext = {
  bookmarkIds: number[];
  handleToggleBookmark: (id: number) => void;
  bookmarkJobItems: TJobItemExpanded[];
  isLoading: boolean;
};

export const BookmarksContext = createContext<TBookmarksContext | null>(null);

function BookmarksContextProvider({ children }: { children: ReactNode }) {
  const [bookmarkIds, setBookmarkIds] = useLocalStorage<number[]>(
    'bookmarkIds',
    []
  );

  const { bookmarkJobItems, isLoading } = useJobItemsFromIds(bookmarkIds);

  const handleToggleBookmark = (id: number) => {
    if (bookmarkIds.includes(id)) {
      setBookmarkIds(bookmarkIds.filter((bookmarkId) => bookmarkId != id));
    } else {
      setBookmarkIds([...bookmarkIds, id]);
    }
  };

  return (
    <BookmarksContext.Provider
      value={{ bookmarkIds, handleToggleBookmark, bookmarkJobItems, isLoading }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}

export default BookmarksContextProvider;
