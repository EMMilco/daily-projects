import $ from 'jquery';

const getCityByIp = ({ dispatch, getState }) => {
  const { cityId } = getState();
  if (cityId) { return; };

  const sfLong = -122,
        nycLong = -74,
        midLong = parseInt((sfLong + nycLong) / 2);

  $.getJSON("http://ipinfo.io/json", (data) => {
      const long = parseInt(data.loc.split(",")[1]),
            cityId = (long > midLong) ? 1 : 2;

      dispatch({ type: "CLEAR_POD_ID" });
      dispatch({ type: "SET_CITY_ID", cityId });
  });
};

export default store => next => action => {
  switch (action.type) {
    case "GET_CITY":
      getCityByIp(store);
      break;
  }
  return next(action);
};
