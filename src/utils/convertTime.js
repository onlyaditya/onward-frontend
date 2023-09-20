const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const convertTime = (time) => {
  const dateTime = new Date(time);
  const hours = dateTime.getHours();
  const minutes =
    dateTime.getMinutes() < 10
      ? `0${dateTime.getMinutes()}`
      : `${dateTime.getMinutes()}`;
  const amPm = hours >= 12 ? "PM" : "AM";

  const day = dateTime.getDay();

  const month = dateTime.getMonth();
  const date = dateTime.getDate();

  return [hours % 12 || 12, minutes, amPm, date, months[month], weekdays[day]];
};
