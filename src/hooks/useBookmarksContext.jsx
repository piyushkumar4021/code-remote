import { useContext } from 'react';
import { BookmarksContext } from './../contexts/BookmarksContextProvider';

function useBookmarksContext() {
  const context = useContext(BookmarksContext);

  if (!context) {
    throw new Error("BookmarksContext can't be used outside it' context ");
  }

  return context;
}

export default useBookmarksContext;
