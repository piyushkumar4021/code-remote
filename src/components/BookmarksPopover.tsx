import useBookmarksContext from '../hooks/useBookmarksContext';
import JobList from './JobList';

export default function BookmarksPopover() {
  const { bookmarkJobItems, isLoading } = useBookmarksContext();

  return (
    <div className='bookmarks-popover'>
      <JobList jobItems={bookmarkJobItems} isLoading={isLoading} />
    </div>
  );
}
