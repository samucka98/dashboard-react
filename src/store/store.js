import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import users from '../Reducers/users';
import section from '../Reducers/section';

const allReducers = combineReducers({
  users,
  section
});

const store = createStore(allReducers, applyMiddleware(thunk));

export default store;