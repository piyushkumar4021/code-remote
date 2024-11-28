import { TSortBy } from '../lib/types';

type TSortingProps = {
  sortBy: TSortBy;
  onSortByChange: (newSortBy: TSortBy) => void;
};

type TSortingControlsButtonProps = {
  sortBy: TSortBy;
  type: TSortBy;
  onClick: (newSortBy: TSortBy) => void;
};

export default function SortingControls({
  sortBy,
  onSortByChange,
}: TSortingProps) {
  return (
    <section className='sorting'>
      <i className='fa-solid fa-arrow-down-short-wide'></i>

      <SortingControlsButton
        sortBy={sortBy}
        onClick={onSortByChange}
        type={'relevant'}
      />
      <SortingControlsButton
        sortBy={sortBy}
        onClick={onSortByChange}
        type={'recent'}
      />
    </section>
  );
}

export const SortingControlsButton = ({
  sortBy,
  onClick,
  type,
}: TSortingControlsButtonProps) => {
  return (
    <button
      onClick={() => onClick(type)}
      className={`sorting__button ${
        sortBy === type ? 'sorting__button--active' : ''
      }`}
    >
      {type === 'recent' ? 'Recent' : 'Relevant'}
    </button>
  );
};
