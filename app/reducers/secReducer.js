import * as Types from '../actions/ActionTypes';

const secReducer = (state = 0, action) => {
  switch (action.type) {
    case Types.SET_TIMER_SEC:
      return action.sec
    case Types.SET_COUNTDOWN_SEC:
      return action.sec
    default:
      return state
  }
}

export default secReducer
