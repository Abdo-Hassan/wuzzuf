import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { jobSkill } from '../../generatedTypes/jobsTypes';
import {
  SkillProperty,
  singleSkill,
  SkillJobs,
} from '../../generatedTypes/singleSkill';
import './skillOrJobs.css';

const RelatedSkillsOrJob = ({
  relatedSideBarLink,
}: {
  relatedSideBarLink: SkillJobs | jobSkill;
}) => {
  // FIXME:replace useState with useSelector
  const [skill, setSkill] = useState<SkillProperty>({});

  // fetch job related skills
  const fetchRelatedSkillOrJob = async () => {
    try {
      const res = await axios.get<singleSkill>(
        `https://skills-api-zeta.vercel.app/skill/${relatedSideBarLink?.id}`
      );

      if (res?.data) {
        const skillData: singleSkill = res?.data;
        const skillDetails: SkillProperty = skillData?.data?.skill;
        setSkill(skillDetails);
        // dispatch(fetchSingleSkillJobs(jobs));
      }
      return res?.data;
    } catch (error) {
      console.log('fetchSingleJobSkills error', error);
    }
  };

  useEffect(() => {
    fetchRelatedSkillOrJob();
  }, [relatedSideBarLink]);

  return (
    <ul>
      <li>
        <Link
          className='skill-name'
          to={`/skill/${skill?.id}`}
          state={{ name: skill?.attributes?.name }}>
          {skill?.attributes?.name}
        </Link>
      </li>
    </ul>
  );
};

export default RelatedSkillsOrJob;
