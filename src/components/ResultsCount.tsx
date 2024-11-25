type TResultsCount = {
  totalResults: number;
};

export default function ResultsCount({ totalResults }: TResultsCount) {
  return (
    <p className='count'>
      <div className='u-bold'>{totalResults}</div> results
    </p>
  );
}
