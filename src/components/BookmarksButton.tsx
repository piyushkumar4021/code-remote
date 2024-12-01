import { TriangleDownIcon } from '@radix-ui/react-icons';
import BookmarksPopover from './BookmarksPopover';
import { useEffect, useState } from 'react';

export default function BookmarksButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target &&
        !target.closest('.bookmarks-btn') &&
        !target.closest('.bookmarks-popover')
      ) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <section>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className='bookmarks-btn'
      >
        Bookmarks <TriangleDownIcon />
      </button>

      {isOpen && <BookmarksPopover />}
    </section>
  );
}
