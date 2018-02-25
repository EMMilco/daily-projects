export default (state = false, action) => {
  switch (action.type) {
    case "SET_DESK_HASH_VISIBLE":
      return true;
    case "SET_DESK_HASH_HIDE":
      return false;
    case "SET_DESKS_VISIBLE":
      return false;
    case "HIDE_MODALS":
      return false;
  }
  return state;
};
