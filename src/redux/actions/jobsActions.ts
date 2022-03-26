import { Job, jobSkill } from './../../generatedTypes/jobsTypes';
import {
  FETCH_JOBS,
  FETCH_SEARCH_JOBS,
  FETCH_SINGLE_JOB_SKILLS,
} from '../types/types';
import { SkillJobs } from '../../generatedTypes/singleSkill';

export const fetchJobs = (jobs: Job[]) => ({
  type: FETCH_JOBS,
  payload: jobs,
});

export const fetchSingleJobSkills = (jobSkill: jobSkill) => ({
  type: FETCH_SINGLE_JOB_SKILLS,
  payload: jobSkill,
});

export const fetchSingleSkillJobs = (skillJobs: SkillJobs[]) => ({
  type: FETCH_SINGLE_JOB_SKILLS,
  payload: skillJobs,
});

export const fetchSearchJobs = (search: String) => ({
  type: FETCH_SEARCH_JOBS,
  payload: search,
});
