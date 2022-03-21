import { FETCH_SKILLS } from '../types/skillsTypes';

const INIT_STATE = {
  skills: [],
};

export const skillsReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case FETCH_SKILLS:
      return {
        ...state,
        skills: action.payload,
      };

    default:
      return state;
  }
};
