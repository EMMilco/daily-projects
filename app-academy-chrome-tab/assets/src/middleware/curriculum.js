import { getJSON } from 'jquery';

import { GITHUB, READMES } from 'util/settings';
import getStamp from 'util/dateStamp';

const getReadme = ({ dispatch, getState }, token) => {
  const state   = getState(),
        { day } = state.day,
        url     = GITHUB.readmeUrl + GITHUB[READMES[day]];

  getJSON(`${ url }?access_token=${ token }`, processReadme(dispatch, day));
};

const processReadme = (dispatch, day) => response => {
  const all     = READMES[day] === 'fullStack',
        content = atob(response.content),
        url     = baseUrl(response.html_url),
        readme  = [
    extractDaysContent(day, all),
    addAllLinks(content, all),
    normalizeLinks,
    fixRelativeLinks(url),
    removeEmojis // :|
  ].reduce((readme, func) => func(readme), content);

  const curriculum = {
    dateStamp: getStamp().date,
    readme
  };

  dispatch({ type: "SET_CURRICULUM", curriculum });
};

const baseUrl = url => {
  return url.split('/').slice(0, -1).join('/');
};

const extractDaysContent = (day, all) => readme => {
  if (all) { return readme; }

  const regex = new RegExp(`## ${ day }(?:(?!## w)[\\s\\S])*`);
  return regex.exec(readme)[0];
};

const addAllLinks = (fullContent, all) => readme => {
  if (all) { return readme; }
  const regex = /\[\S*\]: \S*\n/g;

  let link;
  let links = "";
  while (link = regex.exec(fullContent)) {
    links += link;
  }

  return readme + links;
};

const normalizeLinks = readme => {
  return readme.replace(/]: */g, ']: ');
};

const fixRelativeLinks = url => readme => {
  return readme.replace(/(]: )(?!http)/g, `]: ${ url }/`);
};

const removeEmojis = readme => {
  return readme.replace(/:\S*:/g, '');
};

export default store => next => action => {
  switch (action.type) {
    case "GET_CURRICULUM":
      getReadme(store, action.token);
      break;
  }
  return next(action);
};
