import { createStore, combineReducers } from 'redux';
import { todos } from './todos/reducers';

const reducers = {
  todos
};

const rootReducer = combineReducers(reducers);

export default createStore(rootReducer);