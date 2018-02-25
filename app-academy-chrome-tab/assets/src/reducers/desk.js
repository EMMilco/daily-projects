export default (state = (localStorage['desk'] || null), action) => {
  switch (action.type) {
    case "SET_DESK":
      return action.desk;
    case "CLEAR_DESK":
      return null;
  }
  return state;
};
