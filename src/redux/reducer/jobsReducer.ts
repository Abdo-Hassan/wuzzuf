import { Job, Skill } from './../../generatedTypes/jobsTypes';
import { FETCH_JOB_SKILLS, FETCH_SINGLE_JOB_SKILLS } from './../types/types';
import { FETCH_JOBS } from '../types/types';

interface State {
  jobs: Job[];
  jobSkills: Skill[];
  jobSkill: Skill;
}

const INIT_STATE: State = {
  jobs: [],
  jobSkills: [],
  jobSkill: {},
};

export const jobsReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };

    case FETCH_JOB_SKILLS:
      return {
        ...state,
        jobSkills: action.payload,
      };

    case FETCH_SINGLE_JOB_SKILLS:
      return {
        ...state,
        jobSkill: action.payload,
      };

    default:
      return state;
  }
};
