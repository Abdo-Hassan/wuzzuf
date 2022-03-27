import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { jobSkill } from '../../generatedTypes/jobsTypes';
import { singleSkill, SkillProperty } from '../../generatedTypes/singleSkill';
import { fetchSingleJobSkills } from '../../redux/actions/jobsActions';

const JobSkills = ({ jobSkill }: { jobSkill: jobSkill }) => {
  const [skill, setSkill] = useState<SkillProperty>({});
  const dispatch = useDispatch();

  // fetch job related skills
  const fetchSingleJobSkillsData = async () => {
    try {
      const res = await axios.get<singleSkill>(
        `https://skills-api-zeta.vercel.app/skill/${jobSkill?.id}`
      );

      if (res?.data) {
        const skillData: singleSkill = res?.data;
        const skill: SkillProperty = skillData?.data.skill;
        setSkill(skill);
        dispatch(fetchSingleJobSkills(skill));
      }
      return res?.data;
    } catch (error) {
      console.log('fetchSingleJobSkills error', error);
    }
  };

  useEffect(() => {
    fetchSingleJobSkillsData();
    // eslint-disable-next-line
  }, [jobSkill]);

  return (
    <Link
      to={`/skill/${skill?.id}`}
      state={{ name: skill?.attributes?.name }}
      className='skill-title'>
      {skill?.attributes?.name}
    </Link>
  );
};

export default JobSkills;
