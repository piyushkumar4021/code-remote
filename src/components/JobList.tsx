import useActiveId from '../hooks/useActiveId';
import { TJobItem } from '../lib/types';
import JobListItem from './JobListItem';
import Spinner from './Spinner';

type TJobListProps = {
  jobItems: TJobItem[];
  isLoading: boolean;
};

export function JobList({ jobItems, isLoading }: TJobListProps) {
  const activeId = useActiveId();

  return (
    <ul className='job-list'>
      {isLoading && <Spinner />}
      {!isLoading &&
        jobItems.map((jobItem) => (
          <JobListItem
            key={jobItem.id}
            jobItem={jobItem}
            isActive={activeId === jobItem.id}
          />
        ))}
    </ul>
  );
}

export default JobList;
