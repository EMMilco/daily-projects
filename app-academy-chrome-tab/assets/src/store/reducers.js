import { combineReducers } from 'redux';

import curriculum from 'reducers/curriculum';
import cityId from 'reducers/city_id';
import podId from 'reducers/pod_id';
import desk from 'reducers/desk';
import day from 'reducers/day';

import modalsDeskHash from 'reducers/modals/desk_hash';
import modalsDesks from 'reducers/modals/desks';

import timerInterval from 'reducers/timer/interval';
import timerPlaying from 'reducers/timer/playing';
import timerSeconds from 'reducers/timer/seconds';

const RootReducer = combineReducers({
  curriculum,
  cityId,
  podId,
  day,
  desk,
  modals: combineReducers({
    desks: modalsDesks,
    deskHash: modalsDeskHash
  }),
  timer: combineReducers({
    playing: timerPlaying,
    seconds: timerSeconds,
    interval: timerInterval
  })
});

export default RootReducer;
