import React from 'react';
import { CORNERS } from 'util/links';

const links = () => CORNERS.map((link, index) => {
  const key = `corner-${index}`;

  return (
    <li key={ key }>
      <a href={ link.url }>{ link.title }</a>
    </li>
  );
});

export default () => (
  <nav className="corners">
    <ul>
      { links() }
    </ul>
  </nav>
);
