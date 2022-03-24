import { FC } from 'react';
import { Job } from '../../generatedTypes/jobsTypes';
import { Link } from 'react-router-dom';
import './jobs.css';
import JobSkills from './JobSkills';

interface Props {
  job: Job;
}

const JobCard: FC<Props> = ({ job }) => {
  // const jobSkill = useSelector((state: jobSkillState) => state.jobSkill);
  const jobSkills = job?.relationships.skills;

  return (
    <div className='job-wrapper'>
      <h3 className='single-job'>{job?.attributes?.title}</h3>

      <span>Related Skills:</span>
      <div className='single-skill'>
        {jobSkills &&
          jobSkills?.length > 0 &&
          jobSkills?.map((jobSkill) => <JobSkills jobSkill={jobSkill} />)}
      </div>

      <Link
        to={`/job/${job?.id}`}
        className='job-link'
        style={{ color: '#000' }}>
        View Job details
      </Link>
    </div>
  );
};

export default JobCard;
