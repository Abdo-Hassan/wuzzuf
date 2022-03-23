import { createStore } from 'redux';
import { jobsReducer } from './redux/reducer/jobsReducer';

const store = createStore(
  jobsReducer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
