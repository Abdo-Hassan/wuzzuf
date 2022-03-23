import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { IAllJobData, IJobs, IJobsSkills } from '../../interfaces/interfaces';
import { Link } from 'react-router-dom';
import './jobs.css';

interface Props {
  job: IJobs;
}

const JobCard: FC<Props> = ({ job }) => {
  const [relatedSkills, setRelatedSkills] = useState<IJobsSkills[]>([]);

  // fetch job related skills
  const fetchRelatedSkills = async () => {
    try {
      const res = await axios.get<IAllJobData>(
        `https://skills-api-zeta.vercel.app/job/${job?.id}/`
      );

      const jobData: IAllJobData = res?.data!;
      const relatedSkills: IJobsSkills[] = jobData?.data?.job?.relationships!;

      setRelatedSkills(relatedSkills!);
      return res?.data;
    } catch (error) {
      console.log('fetchRelatedSkills error', error);
    }
  };

  useEffect(() => {
    fetchRelatedSkills();
  }, []);

  // fetch job skills details
  // const fetchSkills = async () => {
  //   try {
  //     const res = await axios.get<IAllJobData>(
  //       `https://skills-api-zeta.vercel.app/job/${job?.id}/`
  //     );

  //     const jobData: IAllJobData = res?.data!;
  //     const relatedSkills: IJobsSkills[] = jobData?.data?.job?.relationships!;

  //     setRelatedSkills(relatedSkills!);
  //     return res?.data;
  //   } catch (error) {
  //     console.log('fetchRelatedSkills error', error);
  //   }
  // };

  return (
    <div className='job-wrapper'>
      <h3 className='single-job'>{job?.attributes?.title}</h3>

      <span>Related Skills:</span>
      {/* <div className='single-skill'>
        {skills &&
          skills.map((jobSkill, i) => (
            <span className='skill-title' key={i}>
              {jobSkill}
            </span>
          ))}
      </div> */}

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
