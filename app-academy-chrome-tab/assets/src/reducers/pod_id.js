export default (state = (localStorage["podId"] || null), action) => {
  switch (action.type) {
    case "SET_POD_ID":
      return action.podId;
    case "CLEAR_POD_ID":
      return null;
  }
  return state;
};
