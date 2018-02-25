import React from 'react';

import Cities from './cities/container';
import Pods from './pods/container';

export default ({ city, pod }) => (
  <ul className="menu">
    <li>
      { city }
      <Cities />
    </li>
    <li className="inactive"> > </li>
    <li>
      { pod }
      <Pods />
    </li>
  </ul>
);
