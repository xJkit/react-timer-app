import * as Types from '../actions/ActionTypes';

const statusReducer = (state = 'stopped', action) => {
  switch (action.type) {
    case Types.SET_TIMER_STATUS:
      return action.status
    case Types.SET_COUNTDOWN_STATUS:
      return action.status
    default:
      return state
  }
}

export default statusReducer
