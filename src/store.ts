import { createStore } from 'redux';
import { skillsReducer } from './redux/reducer/skillsReducer';

const store = createStore(
  skillsReducer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
