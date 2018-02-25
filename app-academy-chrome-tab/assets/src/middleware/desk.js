export default store => next => action => {
  switch (action.type) {
    case "SET_POD_ID":
      store.dispatch({ type: "CLEAR_DESK" });
      break;
  }
  return next(action);
};
