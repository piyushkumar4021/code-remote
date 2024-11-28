type TPaginationControls = {
  currentPage: number;
  totalNumberOfPages: number;
  onPageChange: (direction: 'next' | 'previous') => void;
};

type TPaginationButtons = {
  currentPage: number;
  type: 'next' | 'previous';
  handleClick: (direction: 'next' | 'previous') => void;
};

export default function PaginationControls({
  currentPage,
  totalNumberOfPages,
  onPageChange,
}: TPaginationControls) {
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
}: TPaginationButtons) => {
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
