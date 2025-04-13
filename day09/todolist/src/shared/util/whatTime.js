export const CurrentTime = () => {
  const [day, date, month, year] = new Date().toUTCString().split(" ");
  return [day, date, month, year];
};