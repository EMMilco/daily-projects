import sjcl from 'sjcl';

const notify = ({ cityId, desk }) => chrome.notifications.create(
  'desk-hash-changed', 
  { 
    type: "basic", 
    title: "Desk Hash Updated", 
    message: `The desk hash has been updated.\nCity: ${ cityId }, Desk: ${ desk }.`, 
    iconUrl: "/assets/img/app-academy-logo-chrome-48.png"
  }
);

const error = () => chrome.notifications.create(
  'desk-hash-changed', 
  { 
    type: "basic", 
    title: "Desk Hash couldn't be Updated", 
    message: "The cityId and/or Desk # was not set.", 
    iconUrl: "/assets/img/app-academy-logo-chrome-48.png"
  }
);

const setDeskHash = (password) => {
  const { cityId, desk } = localStorage;
  if (cityId && desk) {
    const deskRecipe = cityId + desk + password;
    const deskHash = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(deskRecipe));

    chrome.storage.local.set({ deskHash });
    notify(localStorage);
  } else {
    error();
  }
};

export default store => next => action => {
  switch (action.type) {
    case "SET_CITY_ID":
      localStorage['cityId'] = action.cityId;
      break;
    case "CLEAR_CITY_ID":
      localStorage.removeItem("cityId");
      break;
    case "SET_POD_ID":
      localStorage['podId'] = action.podId;
      break;
    case "CLEAR_POD_ID":
      localStorage.removeItem("podId");
      break;
    case "SET_DESK":
      localStorage['desk'] = action.desk;
      break;
    case "CLEAR_DESK":
      localStorage.removeItem("desk");
      break;
    case "SET_DAY":
      localStorage['day'] = JSON.stringify(action.day);
      break;
    case "CLEAR_DAY":
      localStorage.removeItem("day");
      break;
    case "SET_CURRICULUM":
      localStorage['curriculum'] = JSON.stringify(action.curriculum);
      break;
    case "CLEAR_CURRICULUM":
      localStorage.removeItem("curriculum");
      break;
    case "SET_DESKTOP_HASH":
      setDeskHash(action.password);
      break;
  }
  return next(action);
};
