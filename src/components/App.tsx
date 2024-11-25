import { useState } from 'react';
import Background from './Background';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import JobItemContent from './JobItemContent';
import Sidebar, { SidebarTop } from './Sidebar';
import JobList from './JobList';
import Pagination from './PaginationControls';
import useJobItem from '../hooks/useJobItems';

function App() {
  const [query, setQuery] = useState('');
  const { jobItems, isLoading } = useJobItem(query);

  console.log(jobItems);

  return (
    <>
      <Background />
      <Header query={query} setQuery={setQuery} />

      <Container>
        <Sidebar>
          <SidebarTop />
          <JobList jobItems={jobItems} isLoading={isLoading} />
          <Pagination />
        </Sidebar>

        <JobItemContent />
      </Container>

      <Footer />
    </>
  );
}

export default App;
