const DAYS = [
  'Sunday', 
  'Monday', 
  'Tuesday', 
  'Wednesday',
  'Thursday', 
  'Friday', 
  'Saturday'
];

const MONTHS = [
  'January', 
  'February', 
  'March', 
  'April',
  'May', 
  'June', 
  'July', 
  'August', 
  'September',
  'October', 
  'November', 
  'December'
];

export default () => {
  const now       = new Date(),
        hours     = now.getHours(),
        dateStamp = DAYS[now.getDay()].substring(0,3) + ", " +
                    MONTHS[now.getMonth()].substring(0,3) + " " +
                    now.getDate();

  return {
    date: dateStamp,
    time: dateStamp + ", " + hours
  };
};
