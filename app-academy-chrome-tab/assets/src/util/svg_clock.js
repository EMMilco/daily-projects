import { MINS_IN_SESSION } from 'util/settings';

export const setDashFromSec = (rad, s) => {
  const maxLength = rad * Math.PI * 2;

  return {
    strokeDashoffset : degToDashoffset(maxLength, secondsToDeg(s)),
    strokeDasharray  : maxLength
  }
};

export const setDashFromMin = (rad, m) => {
  const maxLength = rad * Math.PI * 2;

  return {
    strokeDashoffset : degToDashoffset(maxLength, minutesToDeg(m)),
    strokeDasharray  : maxLength
  }
};

const secondsToDeg = (s = 0) => 360 * (s / 60);
const minutesToDeg = (s = 0) => 360 * (s / MINS_IN_SESSION);

const degToDashoffset = (maxLength, deg) => maxLength - (maxLength * (deg / 360));