import React from 'react';

const secondsStr = seconds => {
  if (seconds >= 60 * 99 + 59) { return "59"; }

  const s = seconds % 60;
  return (s < 10) ? "0" + s : "" + s;
};

const minutesStr = seconds => {
  if (seconds >= 60 * 99) { return "99"; }

  const m = Math.floor(seconds / 60);
  return (m < 10) ? "0" + m : "" + m;
};

export default ({ seconds }) => (
  <div className="readout">
    <div className="colon">:</div>

    <div className="readout-minutes">
      { minutesStr(seconds) }
    </div>

    <div className="readout-seconds">
      { secondsStr(seconds) }
    </div>
  </div>
);
