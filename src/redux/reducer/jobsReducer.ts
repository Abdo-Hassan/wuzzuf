import { SkillProperty } from '../../generatedTypes/singleSkill';
import { Job } from './../../generatedTypes/jobsTypes';
import { FETCH_JOBS, FETCH_SINGLE_JOB_SKILLS } from './../types/types';

interface State {
  jobs: Job[];
  jobSkill: SkillProperty;
}

const INIT_STATE: State = {
  jobs: [],
  jobSkill: {},
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

    default:
      return state;
  }
};
