// Utilities

//format date as YYYY-MM-DD
function getDate() {
  const d = new Date();
  return new Date(d.getTime() - d.getTimezoneOffset() * 60 * 1000)
    .toISOString()
    .split('T')[0];
}

export { getDate };
