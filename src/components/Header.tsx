import BookmarksButton from './BookmarksButton';
import Logo from './Logo';
import SearchForm from './SearchForm';

export default function Header({ query, setQuery }) {
  return (
    <header className='header'>
      <div className='header__top'>
        <Logo />
        <BookmarksButton />
      </div>

      <SearchForm query={query} setQuery={setQuery} />
    </header>
  );
}
