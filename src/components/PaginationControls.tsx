import { TDirection } from '../lib/types';

type TPaginationControlsProps = {
  currentPage: number;
  totalNumberOfPages: number;
  onPageChange: (direction: TDirection) => void;
};

type TPaginationButtonsProps = {
  currentPage: number;
  type: TDirection;
  handleClick: (direction: TDirection) => void;
};

export default function PaginationControls({
  currentPage,
  totalNumberOfPages,
  onPageChange,
}: TPaginationControlsProps) {
  return (
    <section className='pagination'>
      {currentPage > 1 && (
        <PaginationButtons
          type='previous'
          handleClick={onPageChange}
          currentPage={currentPage}
        />
      )}
      {currentPage < totalNumberOfPages && (
        <PaginationButtons
          type='next'
          handleClick={onPageChange}
          currentPage={currentPage}
        />
      )}
    </section>
  );
}

export const PaginationButtons = ({
  currentPage,
  type,
  handleClick,
}: TPaginationButtonsProps) => {
  return (
    <button
      onClick={() => handleClick(type)}
      className={`pagination__button pagination__button--${type}`}
    >
      {type === 'previous' && <span>&larr;</span>}
      Page {type === 'next' ? currentPage + 1 : currentPage - 1}
      {type === 'next' && <span>&rarr;</span>}
    </button>
  );
};
