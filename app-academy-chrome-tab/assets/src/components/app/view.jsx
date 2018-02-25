import React from 'react';

import Curriculum from './curriculum/container';
import DeskInfo from './desk_info/container';
import DeskHash from './desk_hash/container';
import Corners from './corners';
import Header from './header/container';
import Links from './links/view';
import Timer from './timer/view';
import Desks from './desks/container';

export default ({ showOptions, getDay, loaded }) => {
  if (loaded) {
    return (
      <main>
        <DeskHash />
        <Header />
        <Corners />
        <DeskInfo />
        <Desks />
        <Links />
        <div className="pair-tools">
          <Curriculum />
          <Timer />
        </div>
      </main>
    )
  } else {
    getDay();
    return (<div>Loading...</div>);
  }
};
