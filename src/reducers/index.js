import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import events from './events';
import chats from './chats';

const rootReducer = combineReducers({
  events,
  chats,
  routing: routerReducer,
});

export default rootReducer;
