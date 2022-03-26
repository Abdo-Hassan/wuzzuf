import React from 'react';
import { useSelector } from 'react-redux';
import { Job } from '../../generatedTypes/jobsTypes';
import JobCard from './JobCard';
import './jobs.css';

interface State {
  search: string;
}

const Jobs = ({ jobs }: { jobs: Job[] }) => {
  const search = useSelector((state: State) => state.search);

  return (
    <div className='jobs'>
      <h1 className='jobs-main-title'>
        {search !== ''
          ? `"${search}" Jobs (${jobs?.length})`
          : `All Jobs (${jobs?.length})`}
      </h1>

      {jobs && jobs?.length > 0 ? (
        <div className='jobs-wrapper'>
          {jobs && jobs?.map((job, i) => <JobCard key={i} job={job} />)}
        </div>
      ) : (
        <p className='no-search-jobs'>No job for this search result</p>
      )}
    </div>
  );
};

export default Jobs;
