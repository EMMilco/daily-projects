import React from 'react';

import Clock from './clock';
import Info from './info/container';

export default ({ desk, showDesks }) => (
  <header className="desk-info wrap">
    <div className="clock-wrapper">
      <h2 className="number" onClick={ showDesks }>{ desk || "•" }</h2>
      <Clock />
    </div>
    <Info />
  </header>
);
