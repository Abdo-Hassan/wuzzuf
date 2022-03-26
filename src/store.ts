import { createStore, applyMiddleware } from 'redux';
import { jobsReducer } from './redux/reducer/jobsReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  }
}

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, jobsReducer);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(
  persistedReducer,
  applyMiddleware()
  // composeEnhancers()
);

const persistor = persistStore(store);
export { persistor };
export default store;
