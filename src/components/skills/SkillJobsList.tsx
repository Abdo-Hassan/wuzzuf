import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Job, singleJob } from '../../generatedTypes/jobsTypes';
import { SkillJobs } from '../../generatedTypes/singleSkill';
import './skillJobs.css';

const SkillJobsList = ({ job }: { job: SkillJobs }) => {
  // FIXME:replace useState with useSelector
  const [jobsDetails, setJobsDetails] = useState<Job>({});

  // fetch all skills jobs
  const fetchSkillJobs = async () => {
    try {
      const res = await axios.get<singleJob>(
        `https://skills-api-zeta.vercel.app/job/${job?.id}`
      );
      if (res?.data) {
        const jobData: singleJob = res?.data;
        const jobsDetails: Job = jobData?.data.job;
        setJobsDetails(jobsDetails);
        // dispatch(fetchJobs(jobs));
      }
      return jobsDetails;
    } catch (error) {
      console.log('fetchJobs error', error);
    }
  };

  useEffect(() => {
    fetchSkillJobs();
  }, [job]);

  return (
    <div className='skill-job-wrapper'>
      <Link to={`/job/${jobsDetails?.id}`} className='skill-job'>
        {jobsDetails?.attributes?.title!}
      </Link>
      {/* FIXME:replace with importance & level if exist in the api */}
      <div className='skill-job-info-wrapper'>
        <p className='skill-job-info' style={{ marginRight: 150 }}>
          Importance : <span className='skill-job-info-value'> 3.7</span>
        </p>
        <p className='skill-job-info'>
          Level : <span className='skill-job-info-value'> 2.3</span>
        </p>
      </div>
    </div>
  );
};

export default SkillJobsList;
