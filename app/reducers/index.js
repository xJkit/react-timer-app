import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
//reducers
import secReducer from './secReducer';
import statusReducer from './statusReducer';

const rootReducer = combineReducers({
  sec: secReducer,
  status: statusReducer,
  routing: routerReducer
})

export default rootReducer
