import { applyMiddleware } from 'redux';

import localStoring from 'middleware/local_storing';
import githubAuth from 'middleware/github_auth';
import curriculum from 'middleware/curriculum';
import timer from 'middleware/timer';
import city from 'middleware/city';
import desk from 'middleware/desk';
import day from 'middleware/day';

const RootMiddleware = applyMiddleware(
  localStoring,
  githubAuth,
  curriculum,
  timer,
  city,
  day,
  desk,
);

export default RootMiddleware;
