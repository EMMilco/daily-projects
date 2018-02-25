import { createStore } from 'redux';
import Reducers from './reducers';
import Middleware from './middleware';

const configureStore = (preloadedState = {}) => createStore(
  Reducers,
  preloadedState,
  Middleware
);

export default configureStore;
