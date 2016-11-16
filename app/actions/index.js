//action creators
import * as Types from './ActionTypes';


export const setTimerStatus = status => ({
  type: Types.SET_TIMER_STATUS,
  status
})

export const setCountdownStatus = status => ({
  type: Types.SET_COUNTDOWN_STATUS,
  status
})

export const setTimerSec = sec => ({
  type: Types.SET_TIMER_SEC,
  sec
})

export const setCountdownSec = sec => ({
  type: Types.SET_COUNTDOWN_SEC,
  sec
})
