import $ from 'jquery';

import getStamp from 'util/dateStamp';

const getDay = ({ dispatch, getState }, newCityId) => {
  if (!newCityId && !getState().cityId) {
    dispatch({ type: "GET_CITY" });
    return;
  }

  const state     = getState(),
        cityId    = newCityId || state.cityId,
        { podId } = state,
        stamp     = getStamp(),
        url       = `http://progress.appacademy.io/api/pairs.json?city_id=${cityId}`;

  $.getJSON(url, data => {
    data.dateStamp = stamp.date;

    if(!podId || !data.pods[podId]){
      const podId = Object.keys(data.pods)[0];
      dispatch({ type: "SET_POD_ID", podId });
    }

    dispatch({ type: "SET_DAY", day: data });
    dispatch({ type: "CLEAR_CURRICULUM" });
    dispatch({ type: "GET_DAILY_README" });
  });
};

export default store => next => action => {
  switch (action.type) {
    case "GET_DAY":
      getDay(store);
      break;
    case "SET_CITY_ID":
      getDay(store, action.cityId);
      break;
  }
  return next(action);
};
