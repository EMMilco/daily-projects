import React from 'react';

export default ({ pods, podId, desk, day, dateStamp }) => {
  const pair = pods && pods[podId] && pods[podId].pairs[desk];

  return (
    <div className="info">
      <p>{ dateStamp } - { day } { pair && "-" } { pair && pairComponent(pair) }</p>
    </div>
  );
};

const pairComponent = pair => {
  const students = []

  pair.forEach((student, idx) => {;
    students.push(studentLink(student));

    if (idx < pair.length - 1) {
      students.push(' & ');
    }
  });

  return (
    <span className="pair">{ students }</span>
  );
};

const studentLink = ({ github, name }) => {
  const key = `link-${github}`,
        url = `https://github.com/${github}`;

  return (<a href={ url } key={ key }>{ name }</a>);
};
