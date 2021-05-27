import { combineReducers } from 'redux';

// import all reducers here
import floppyReducers from './floppyReducers.js';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  octo: floppyReducers,
});

// make the combined reducers available for import
export default reducers;
