import { combineReducers, applyMiddleware } from 'redux';
import itemsReducer from './itemsReducer';

const reducers = combineReducers({
  items: itemsReducer
});

export default reducers;
