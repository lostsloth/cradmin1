import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import events from './events';
import chefs from './chefs';

const rootReducer = combineReducers({
    events,
    chefs,
});

export default rootReducer;
