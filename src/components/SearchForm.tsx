type TSearchFormProps = {
  query: string;
  setQuery: (nextQuery: string) => void;
};

export default function SearchForm({ query, setQuery }: TSearchFormProps) {
  return (
    <form action='#' onSubmit={(e) => e.preventDefault()} className='search'>
      <button type='submit'>
        <i className='fa-solid fa-magnifying-glass'></i>
      </button>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        spellCheck='false'
        type='text'
        required
        placeholder='Find remote developer jobs...'
      />
    </form>
  );
}
