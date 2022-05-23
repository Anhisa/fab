export function getFlag(countryName) {
  const countryNameEng = countryName.trim().split(' ').join('%20');
  const apiFlags = `https://countryflagsapi.com/png/`;
  const flagUrl = `${apiFlags}${countryNameEng}`;
  return flagUrl;
}