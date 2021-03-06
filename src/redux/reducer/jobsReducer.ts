import { SkillJobs, SkillProperty } from '../../generatedTypes/singleSkill';
import { Job } from './../../generatedTypes/jobsTypes';
import {
  FETCH_JOBS,
  FETCH_SINGLE_JOB_SKILLS,
  FETCH_SINGLE_SKILL_JOBS,
  FETCH_SEARCH_JOBS,
} from './../types/types';

interface State {
  jobs: Job[];
  jobSkill: SkillProperty;
  skillJobs: SkillJobs[];
  search: string;
}

const INIT_STATE: State = {
  jobs: [],
  jobSkill: {},
  skillJobs: [],
  search: '',
};

export const jobsReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };

    case FETCH_SINGLE_JOB_SKILLS:
      return {
        ...state,
        jobSkill: action.payload,
      };

    case FETCH_SINGLE_SKILL_JOBS:
      return {
        ...state,
        skillJobs: action.payload,
      };

    case FETCH_SEARCH_JOBS:
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};
