import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SkillProperty,
  singleSkill,
  SkillJobs,
} from '../../generatedTypes/singleSkill';
import './skillJobs.css';

const RelatedSkills = ({ skills }: { skills: SkillJobs }) => {
  // FIXME:replace useState with useSelector
  const [skill, setSkill] = useState<SkillProperty>({});

  // fetch job related skills
  const fetchSkillsRelatedSkills = async () => {
    try {
      const res = await axios.get<singleSkill>(
        `https://skills-api-zeta.vercel.app/skill/${skills?.id}`
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
    fetchSkillsRelatedSkills();
  }, [skills]);

  return (
    <ul>
      <li>
        <Link
          className='skill-name'
          to={`/skill/${skill?.id}`}
          state={{ skillName: skill?.attributes?.name }}>
          {skill?.attributes?.name}
        </Link>
      </li>
    </ul>
  );
};

export default RelatedSkills;
