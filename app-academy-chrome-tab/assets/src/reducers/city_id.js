export default (state = (localStorage["cityId"] || null), action) => {
  switch (action.type) {
    case "SET_CITY_ID":
      return action.cityId;
    case "CLEAR_CITY_ID":
      return null;
  }
  return state;
};
