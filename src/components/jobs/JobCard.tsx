import axios from 'axios';
import { FC, useEffect } from 'react';
import {
  Job,
  Relationships,
  singleJob,
  Skill,
} from '../../generatedTypes/jobsTypes';
import { Link } from 'react-router-dom';
import './jobs.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobsSkills } from '../../redux/actions/jobsActions';
import JobSkills from './JobSkills';

interface Props {
  job: Job;
}

interface State {
  jobSkills: Skill[];
}

const JobCard: FC<Props> = ({ job }) => {
  const dispatch = useDispatch();
  const skills = useSelector((state: State) => state.jobSkills);

  // fetch job related skills
  const fetchJobRelatedSkills = async () => {
    try {
      const res = await axios.get<singleJob>(
        `https://skills-api-zeta.vercel.app/job/${job?.id}/`
      );

      if (res?.data) {
        const jobData: singleJob = res?.data!;
        const relatedSkills: Skill[] =
          jobData?.data?.job?.relationships?.skills;

        console.log('~ relatedSkills', relatedSkills);
        console.log('~ jobData', jobData);

        dispatch(fetchJobsSkills(relatedSkills));
      }

      return res?.data;
    } catch (error) {
      console.log('fetchJobRelatedSkills error', error);
    }
  };

  useEffect(() => {
    fetchJobRelatedSkills();
  }, [job]);

  console.log('~ job', job);
  console.log('~ skills', skills);

  return (
    <div className='job-wrapper'>
      <h3 className='single-job'>{job?.attributes?.title}</h3>

      <span>Related Skills:</span>
      <div className='single-skill'>
        {skills &&
          skills?.length > 0 &&
          skills.map((skill, i) => <JobSkills skill={skill} key={i} />)}
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
