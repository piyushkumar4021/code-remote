import { BookmarkFilledIcon } from '@radix-ui/react-icons';
import useBookmarksContext from '../hooks/useBookmarksContext';

export default function BookmarkIcon({ id }: { id: number }) {
  const { bookmarkIds, handleToggleBookmark } = useBookmarksContext();

  return (
    <button className='bookmark-btn'>
      <BookmarkFilledIcon
        onClick={(e) => {
          handleToggleBookmark(id);
          e.stopPropagation();
          e.preventDefault();
          e.currentTarget.blur();
        }}
        className={`${bookmarkIds.includes(id) ? 'filled' : ''}`}
      />
    </button>
  );
}
