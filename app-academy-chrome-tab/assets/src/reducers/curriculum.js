import getStamp from 'util/dateStamp';

const checkLocalCurriculum = () => {
  if (!localStorage["curriculum"]) { return null; }

  const curriculum = JSON.parse(localStorage["curriculum"]),
        dateStamp  = curriculum.dateStamp;
  return (dateStamp && dateStamp === getStamp().date) ? curriculum : null;
}

export default (state = checkLocalCurriculum(), action) => {
  switch (action.type) {
    case "SET_CURRICULUM":
      return action.curriculum;
    case "CLEAR_CURRICULUM":
      return null;
  }
  return state;
};
