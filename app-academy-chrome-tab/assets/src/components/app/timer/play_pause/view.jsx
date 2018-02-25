import React from 'react';

const playPath = play => <path onClick={ play } d="M1576 927l-1328 738q-23 13-39.5 3t-16.5-36v-1472q0-26 16.5-36t39.5 3l1328 738q23 13 23 31t-23 31z"/>;
const pausePath = pause => <path onClick={ pause } d="M1664 192v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45zm-896 0v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45z"/>;

export default ({ playing, play, pause }) => (
  <svg width="120" height="120" 
    className="play-pause"
    viewBox="0 0 1792 1792" 
    xmlns="http://www.w3.org/2000/svg">
    { playing ? pausePath(pause) : playPath(play) }
  </svg>
);
