import { MINS_IN_SESSION } from 'util/settings';

const notify = () => chrome.notifications.create(
  'time-to-switch', 
  { 
    type: "basic", 
    title: "Time to Switch", 
    message: "The pair timer has expired.", 
    iconUrl: "/assets/img/app-academy-logo-chrome-48.png"
  }
);

const tick = (dispatch, getState) => {
  const seconds = getState().timer.seconds,
        then = Date.now() - (seconds * 1000);

  return () => {
    const now = Date.now(),
          seconds = Math.floor((now - then) / 1000);

    if (seconds === 60 * MINS_IN_SESSION) { notify(); }

    dispatch({ type : "SET_SECONDS", seconds });
  }
};

const play = ({ getState, dispatch }) => {
  const { interval } = getState().timer;

  if (!interval) {
    const interval = setInterval(tick(dispatch, getState), 1000);
    dispatch({ type: "SET_INTERVAL", interval });
  }
};

const pause = ({ getState, dispatch }) => {
  const interval = getState().timer.interval;

  if (interval) {
    clearInterval(interval);
    dispatch({ type: "CLEAR_INTERVAL" });
  }
};

export default store => next => action => {
  switch (action.type) {
    case "PLAY":
      play(store);
      break;
    case "PAUSE":
      pause(store);
      break;
  }
  return next(action);
};
