export default (state = 0, action) => {
  switch (action.type) {
    case "RESET_SECONDS":
      return 0;
    case "TICK_SECONDS":
      return state + 1;
    case "SET_SECONDS":
      return action.seconds;
  }
  return state;
};
