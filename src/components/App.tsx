import { useState } from 'react';
import Background from './Background';
import Container from './Container';
import Footer from './Footer';
import Header, { HeaderTop } from './Header';
import JobItemContent from './JobItemContent';
import Sidebar, { SidebarTop } from './Sidebar';
import JobList from './JobList';
import Pagination from './PaginationControls';
import SearchForm from './SearchForm';
import useJobItems from '../hooks/useJobItems';
import useDebounce from '../hooks/useDebounce';
import ResultsCount from './ResultsCount';
import Sorting from './SortingControls';
import { QUERY_DELAY } from '../lib/constants';
import { Toaster } from 'react-hot-toast';

function App() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, QUERY_DELAY);
  const { jobItems, isLoading } = useJobItems(debouncedQuery);

  const totalResults = jobItems.length;
  const jobItemsSliced = jobItems.slice(0, 7);

  return (
    <>
      <Background />
      <Header>
        <HeaderTop />
        <SearchForm query={query} setQuery={setQuery} />
      </Header>

      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount totalResults={totalResults} />
            <Sorting />
          </SidebarTop>
          <JobList jobItems={jobItemsSliced} isLoading={isLoading} />
          <Pagination />
        </Sidebar>

        <JobItemContent />
      </Container>

      <Footer />

      <Toaster position='top-right' />
    </>
  );
}

export default App;
