import { IJobs } from './../../interfaces/interfaces';
import { FETCH_JOBS } from '../types/types';

export const fetchJobsAction = (jobs: IJobs[]) => ({
  type: FETCH_JOBS,
  payload: jobs,
});
