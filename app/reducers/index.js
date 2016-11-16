import { combineReducers } from 'redux';
//reducers
import secReducer from './secReducer';
import statusReducer from './statusReducer';

const rootReducer = combineReducers({
  sec: secReducer,
  status: statusReducer
})

export default rootReducer
