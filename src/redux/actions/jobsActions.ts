import { Job, Skill } from './../../generatedTypes/jobsTypes';
import { FETCH_JOBS, FETCH_SINGLE_JOB_SKILLS } from '../types/types';

export const fetchJobs = (jobs: Job[]) => ({
  type: FETCH_JOBS,
  payload: jobs,
});

export const fetchSingleJobSkills = (jobSkill: Skill) => ({
  type: FETCH_SINGLE_JOB_SKILLS,
  payload: jobSkill,
});
