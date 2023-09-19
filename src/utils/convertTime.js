export const convertTime = (time) => {
  const dateTime = new Date(time);
  const hours = dateTime.getHours();
  const minutes =
    dateTime.getMinutes() < 10
      ? `0${dateTime.getMinutes()}`
      : `${dateTime.getMinutes()}`;
  const amPm = hours >= 12 ? "PM" : "AM";

  return [hours % 12 || 12, minutes, amPm];
};
