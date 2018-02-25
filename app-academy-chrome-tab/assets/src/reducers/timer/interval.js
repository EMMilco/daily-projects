export default (state = null, action) => {
  switch (action.type) {
    case "CLEAR_INTERVAL":
      return null;
    case "SET_INTERVAL":
      return action.interval;
  }
  return state;
};
