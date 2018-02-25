import React from 'react';

const podLis = (pods, set) => {
  const keys = Object.keys(pods);

  return keys.map(id => {
    const pod = pods[id];

    return <li key={ id } onClick={ () => { set(id) } }>{ pod.name }</li>
  });
};

export default ({ pods, set }) => (
  <ul>
    { podLis(pods, set) }
  </ul>
);
