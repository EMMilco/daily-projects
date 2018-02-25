import React from 'react';

import ClockSvg from './clock_svg/container';
import Readout from './readout/container';
import PlayPause from './play_pause/container';
import ResetButton from './reset_button/container';
import Handles from './handles/container';

export default () => (
  <div className="timer">
    <div className="clock-wrapper">
      <ClockSvg />
      <Readout />
      <PlayPause />
      <ResetButton />
      <Handles />
    </div>
  </div>
);
