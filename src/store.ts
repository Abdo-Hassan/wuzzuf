import { createStore } from 'redux';
import { jobsReducer } from './redux/reducer/jobsReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(jobsReducer, composeEnhancers());

export default store;
