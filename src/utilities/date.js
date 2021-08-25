// Utilities

//format date as YYYY-MM-DD (based on current time zone)
function getDate() {
  const d = new Date();
  return new Date(d.getTime() - d.getTimezoneOffset() * 60 * 1000)
    .toISOString()
    .split('T')[0];
}

//get full year, ex: 2021
const getYear = () => {
  const d = new Date();
  return d.getFullYear();
};

export { getDate, getYear };
