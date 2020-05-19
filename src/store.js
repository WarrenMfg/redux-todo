import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import { todos, isLoading } from './todos/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = {
  todos,
  isLoading
};

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2 // tells redux-persist how to reconcile the initial and stored states of application
};

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);