import ResultsCount from './ResultsCount';
import Sorting from './SortingControls';

export default function Sidebar({ children }) {
  return <div className='sidebar'>{children}</div>;
}

export function SidebarTop() {
  return (
    <div className='sidebar__top'>
      <ResultsCount />
      <Sorting />
    </div>
  );
}
