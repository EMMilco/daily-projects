import React from 'react';

const pairSpan = pair => {
  const students = []

  pair.forEach((student, idx) => {;
    students.push(student.name);

    if (idx < pair.length - 1) {
      students.push(' & ');
    }
  });

  return (
    <span className="pair">{ students }</span>
  )
};

const studentLink = ({ github, name }) => {
  const key = `link-${github}`,
        url = `https://github.com/${github}`;

  return (<a href={ url } key={ key }>{ name }</a>);
};

const deskPairLi = (desk, pair, idx, set) => (
  <li key= { `pair-${idx}` } className="student-pair" onClick={ () => { set(desk) } }>
    <strong>{ desk }</strong> - { pairSpan(pair) }
  </li>
);

const desksPairList = (pod, set) => {
  if (!pod) { return; }

  const pairs = [],
        desks = Object.getOwnPropertyNames(pod.pairs);

  desks.forEach((desk, idx) => {
    pairs.push(deskPairLi(desk, pod.pairs[desk], idx, set));
  });

  return (
    <ul>
      { pairs }
    </ul>
  );
};

const className = visible => (
  visible ? 'desks is-active' : 'desks'
);

const wrapLi = (body, idx) => (
  <li key={ idx }>{ body }</li>
);

const podName = pod => {
  if (!pod) { return; }

  return <h2>{ pod.name }</h2>
};

export default ({ hideDesks, day, visible, podId, pods, set }) => (
  <article className={ className(visible) }>
    <span onClick={ hideDesks }>×</span>
    <h1>{ day } Desks</h1>
    { podName(pods[podId]) }
    { desksPairList(pods[podId], set) }
  </article>
);
