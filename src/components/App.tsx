import { useState } from 'react';
import Background from './Background';
import Container from './Container';
import Footer from './Footer';
import Header, { HeaderTop } from './Header';
import JobItemContent from './JobItemContent';
import Sidebar, { SidebarTop } from './Sidebar';
import JobList from './JobList';
import PaginationControls from './PaginationControls';
import SearchForm from './SearchForm';
import useJobItems from '../hooks/useJobItems';
import useDebounce from '../hooks/useDebounce';
import ResultsCount from './ResultsCount';
import Sorting from './SortingControls';
import { PAGE_SIZE, QUERY_DELAY } from '../lib/constants';
import { Toaster } from 'react-hot-toast';

function App() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, QUERY_DELAY);
  const { jobItems, isLoading } = useJobItems(debouncedQuery);
  const [currentPage, setCurrentPage] = useState(1);

  const totalResults = jobItems.length;
  const jobItemsSliced = jobItems.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );
  const totalNumberOfPages = Math.ceil(totalResults / PAGE_SIZE);

  const handlePageChange = (direction: 'next' | 'previous') => {
    if (direction === 'previous') {
      setCurrentPage((prev) => prev - 1);
    } else if (direction === 'next') {
      setCurrentPage((prev) => prev + 1);
    }
  };

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
          <PaginationControls
            currentPage={currentPage}
            totalNumberOfPages={totalNumberOfPages}
            onPageChange={handlePageChange}
          />
        </Sidebar>

        <JobItemContent />
      </Container>

      <Footer />

      <Toaster position='top-right' />
    </>
  );
}

export default App;
