import React from 'react';

import { MINS_IN_SESSION } from 'util/settings';
const CNT = MINS_IN_SESSION;
const RADIUS = 240;

const handles = set => {
  const handleMapper = handle(set);
  return Array.from(new Array(CNT), (x,i) => i)
              .map(handleMapper);
};

const handle = set => idx => (
  <div key={ idx } 
    className="handle" 
    style={ handleStyle(idx) }
    onClick={ () => { set(60 * idx) } }>
    <div className="bar" />
  </div>
);

const idxToDeg = idx => (360 / CNT) * idx;
const idxToRads = idx => ((2 * Math.PI) / CNT) * idx;
const idxToX = idx => (Math.sin(idxToRads(idx)) + 1) * RADIUS - 3;
const idxToY = idx => (Math.cos(idxToRads(idx)) + 1) * RADIUS + 7;

const handleStyle = idx => ({
  left: idxToX(idx),
  bottom: idxToY(idx),
  transform: `rotate(${ idxToDeg(idx) }deg)`
});

export default ({ set, playing }) => (
  <div className={ !playing ? "handles paused" : "handles" }>
    { handles(playing ? () => {} : set) }
  </div>
);
