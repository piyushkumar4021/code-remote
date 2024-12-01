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
import useJobItemsFromQuery from '../hooks/useJobItemsFromQuery';
import useDebounce from '../hooks/useDebounce';
import ResultsCount from './ResultsCount';
import SortingControls from './SortingControls';
import { PAGE_SIZE, QUERY_DELAY } from '../lib/constants';
import { Toaster } from 'react-hot-toast';
import { TDirection, TSortBy } from '../lib/types';

function App() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, QUERY_DELAY);
  const { jobItems, isLoading } = useJobItemsFromQuery(debouncedQuery);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<TSortBy>('relevant');

  const totalResults = jobItems.length;
  const totalNumberOfPages = Math.ceil(totalResults / PAGE_SIZE);
  const jobItemsSorted = jobItems.sort((a, b) => {
    if (sortBy === 'relevant') {
      return b.relevanceScore - a.relevanceScore;
    }
    return a.daysAgo - b.daysAgo;
  });
  const jobItemsSlicedAndSorted = jobItemsSorted.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handlePageChange = (direction: TDirection) => {
    if (direction === 'previous') {
      setCurrentPage((prev) => prev - 1);
    } else if (direction === 'next') {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleSortByChange = (newSortBy: TSortBy) => {
    setCurrentPage(1);
    setSortBy(newSortBy);
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
            <SortingControls
              sortBy={sortBy}
              onSortByChange={handleSortByChange}
            />
          </SidebarTop>
          <JobList jobItems={jobItemsSlicedAndSorted} isLoading={isLoading} />
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
