export const findDuration = (start, end) => {
  const date1 = new Date(start);
  const date2 = new Date(end);

  const duration = date2 - date1;

  const minutes = Math.floor((duration / 1000 / 60) % 60);
  const hours = Math.floor(duration / 1000 / 60 / 60);

  return `${hours}h ${minutes}mins`;
};
