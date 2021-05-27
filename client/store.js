// Overview: Call in our reducers from the store. Store is used as input in index.js

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/combineReducers';

const store = createStore(
  reducers,
  // we are adding composeWithDevTools here to get easy access to the Redux dev tools
  composeWithDevTools()
);

export default store;