import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Skill } from '../../generatedTypes/jobsTypes';
import { singleSkill, SkillProperty } from '../../generatedTypes/singleSkill';
import { fetchSingleJobSkills } from '../../redux/actions/jobsActions';

interface State {
  jobSkill: SkillProperty;
}

const JobSkills = ({ skill }: { skill: Skill }) => {
  const dispatch = useDispatch();
  const jobSkill = useSelector((state: State) => state.jobSkill);

  // fetch all jobs
  const fetchSingleJobSkillsData = async () => {
    try {
      const res = await axios.get<singleSkill>(
        `https://skills-api-zeta.vercel.app/skill/${skill?.id}`
      );

      if (res?.data) {
        const skillData: singleSkill = res?.data;
        const skill: SkillProperty = skillData?.data.skill;
        dispatch(fetchSingleJobSkills(skill));
      }
      return res?.data;
    } catch (error) {
      console.log('fetchSingleJobSkills error', error);
    }
  };

  useEffect(() => {
    fetchSingleJobSkillsData();
  }, [skill]);

  return <span className='skill-title'>{jobSkill?.attributes?.name}</span>;
};

export default JobSkills;
