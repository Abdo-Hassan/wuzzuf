import { IJobs } from './../../interfaces/interfaces';
import { FETCH_JOBS } from '../types/types';

const INIT_STATE = {
  jobs: [] as IJobs,
};

export const jobsReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };

    default:
      return state;
  }
};
