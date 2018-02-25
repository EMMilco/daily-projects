import React from 'react';
import {MAIN_LINKS} from '../../../util/links';

export default () => (
  <main className="links-group">
    { MAIN_LINKS.map(linksSection) }
  </main>
);

const linksSection = ({ title, links }, idx) => {
  return (
    <section className="links-subs"
      key={ `links-section-${idx}` }>
      <h2 className="title">{ title }</h2>
      { linksList(links) }
    </section>
  );
};

const linksList = links => {
  return (
    <ul className="link-list">
      { links.map(linkListItem) }
    </ul>
  )
};

const linkListItem = (link, idx) => {
  const subLinks = link.sub ? linksList(link.sub) : null,
        key = `link-${idx}`;

  return (
    <li className="link-item" key={ key }>
      <a href={ link.url }>{ link.title }</a>
      { subLinks }
    </li>
  );
};
