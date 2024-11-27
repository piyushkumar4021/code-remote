type TResultsCount = {
  totalResults: number;
};

export default function ResultsCount({ totalResults }: TResultsCount) {
  return (
    <p className='count'>
      <span className='u-bold'>{totalResults}</span> results
    </p>
  );
}
