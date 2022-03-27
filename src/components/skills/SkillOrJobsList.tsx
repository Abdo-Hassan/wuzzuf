import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Job, jobSkill, singleJob } from '../../generatedTypes/jobsTypes';
import {
  singleSkill,
  SkillJobs,
  SkillProperty,
} from '../../generatedTypes/singleSkill';
import './skillOrJobs.css';

const SkillOrJobsList = ({
  relatedSingleList,
  skillId,
}: {
  relatedSingleList: SkillJobs | jobSkill;
  skillId: string;
}) => {
  // FIXME:replace useState with useSelector
  const [skillDetails, setSkillDetails] = useState<Job>({});
  const [jobsDetails, setJobDetails] = useState<SkillProperty>({});

  // fetch all jobs for skills
  const fetchSkillJobs = async () => {
    try {
      const res = await axios.get<singleJob>(
        `https://skills-api-zeta.vercel.app/job/${relatedSingleList?.id}`
      );
      if (res?.data) {
        const jobData: singleJob = res?.data;
        const skillOrJobsDetails: Job = jobData?.data.job!;
        setSkillDetails(skillOrJobsDetails);
        // dispatch(fetchJobs(jobs));
      }
      return res?.data;
    } catch (error) {
      console.log('fetchJobs error', error);
    }
  };

  // fetch all skills for jobs
  const fetchJobSkills = async () => {
    try {
      const res = await axios.get<singleSkill>(
        `https://skills-api-zeta.vercel.app/skill/${relatedSingleList?.id}`
      );
      if (res?.data) {
        const skillData: singleSkill = res?.data;
        const skillOrJobsDetails: SkillProperty = skillData?.data.skill!;
        setJobDetails(skillOrJobsDetails);
        // dispatch(fetchJobs(jobs));
      }
      return res?.data;
    } catch (error) {
      console.log('fetchJobs error', error);
    }
  };

  useEffect(() => {
    if (skillId) {
      fetchSkillJobs();
    } else {
      fetchJobSkills();
    }
    // eslint-disable-next-line
  }, [relatedSingleList, skillId]);

  return (
    <div className='skill-job-wrapper'>
      <Link
        to={`/${skillId ? 'job' : 'skill'}/${
          skillId ? skillDetails?.id : jobsDetails?.id
        }`}
        className='skill-job'
        state={{
          name: skillId
            ? skillDetails?.attributes?.title
            : jobsDetails?.attributes?.name,
        }}>
        {skillId
          ? skillDetails?.attributes?.title!
          : jobsDetails?.attributes?.name!}
      </Link>

      <div className='skill-job-info-wrapper'>
        {/* type */}
        {!skillId && (
          <p className='skill-job-info' style={{ marginRight: 150 }}>
            Type :{' '}
            <span className='skill-job-info-value'>
              {jobsDetails?.attributes?.type!}
            </span>
          </p>
        )}

        {/* Importance */}
        <p className='skill-job-info' style={{ marginRight: 150 }}>
          Importance :{' '}
          <span className='skill-job-info-value'>
            {skillId ? '3.7' : jobsDetails?.attributes?.importance!}
          </span>
        </p>

        {/* Level */}
        <p className='skill-job-info'>
          Level :{' '}
          <span className='skill-job-info-value'>
            {skillId ? '2.3' : jobsDetails?.attributes?.level!}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SkillOrJobsList;
