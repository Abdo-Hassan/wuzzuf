import React, { FC } from 'react';
import { IJobs } from '../../interfaces/interfaces';
import './jobs.css';

interface Props {
  job: IJobs;
}

const JobCard: FC<Props> = ({ job }) => {
  return (
    <div className='job-wrapper'>
      <h3 className='single-job'>{job?.attributes?.title}</h3>

      <span>Related Skills:</span>
      <div className='single-skill'>
        {['jobSkill1', 'jobSkill2', 'jobSkill3', 'jobSkill4'].map(
          (jobSkill, i) => (
            <span className='skill-title' key={i}>
              {jobSkill}
            </span>
          )
        )}
      </div>

      <span className='job-link'>
        <a href='#' style={{ color: '#000' }}>
          View Job details
        </a>
      </span>
    </div>
  );
};

export default JobCard;
