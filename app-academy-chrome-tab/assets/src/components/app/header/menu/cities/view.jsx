import React from 'react';

import { CITIES } from 'util/settings';

const cityLis = (set) => {
  const keys = Object.keys(CITIES);

  return keys.map(id => (
    <li key={ id } onClick={ () => { set(id) } }>{ CITIES[id].abbr }</li>
  ));
};

export default ({ set }) => (
  <ul>
    { cityLis(set) }
  </ul>
);
