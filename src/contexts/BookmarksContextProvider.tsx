import { createContext, ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

type TBookmarksContext = {
  bookmarkIds: number[];
  handleToggleBookmark: (id: number) => void;
};

export const BookmarksContext = createContext<TBookmarksContext | null>(null);

function BookmarksContextProvider({ children }: { children: ReactNode }) {
  const [bookmarkIds, setBookmarkIds] = useLocalStorage<number[]>(
    'bookmarkIds',
    []
  );

  const handleToggleBookmark = (id: number) => {
    if (bookmarkIds.includes(id)) {
      setBookmarkIds(bookmarkIds.filter((bookmarkId) => bookmarkId != id));
    } else {
      setBookmarkIds([...bookmarkIds, id]);
    }
  };

  return (
    <BookmarksContext.Provider value={{ bookmarkIds, handleToggleBookmark }}>
      {children}
    </BookmarksContext.Provider>
  );
}

export default BookmarksContextProvider;
