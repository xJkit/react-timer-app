//action creators
import * as Types from './ActionTypes';


export const setTimerStatus = bool => ({
  type: Types.SET_TIMER_STATUS,
  status: bool
})

export const setCountdownStatus = bool => ({
  type: Types.SET_COUNTDOWN_STATUS,
  status: bool
})

export const setTimerSec = sec => ({
  type: Types.SET_TIMER_SEC,
  sec
})

export const setCountdownSec = sec => ({
  type: Types.SET_COUNTDOWN_SEC,
  sec
})
