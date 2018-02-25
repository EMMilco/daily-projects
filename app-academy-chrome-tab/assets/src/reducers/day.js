import getStamp from 'util/dateStamp';

const checkLocalDay = () => {
  if (!localStorage["day"]) { return null; }

  const day = JSON.parse(localStorage["day"]);
  return (day.dateStamp !== getStamp().date) ? null : day;
};

export default (state = checkLocalDay(), action) => {
  switch (action.type) {
    case "SET_DAY":
      return action.day;
    case "CLEAR_DAY":
      return null;
  }
  return state;
};
