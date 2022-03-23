import React from 'react';
import { IJobs } from '../../interfaces/interfaces';
import JobCard from './JobCard';
import './jobs.css';

const Jobs = ({ jobs }: { jobs: IJobs[] }) => {
  return (
    <div className='jobs'>
      <h1 className='jobs-main-title'>All Jobs ({jobs?.length})</h1>
      <div className='jobs-wrapper'>
        {jobs && jobs?.map((job, i) => <JobCard key={i} job={job} />)}
      </div>
    </div>
  );
};

export default Jobs;
