export function getFlag(countryName) {
  let countryNameEng = countryName.trim().split(' ').join('%20');
  if(countryNameEng === 'Surinam') {
    countryNameEng = 'Suriname';
  }
  const apiFlags = `https://countryflagsapi.com/png/`;
  const flagUrl = `${apiFlags}${countryNameEng}`;
  return flagUrl;
}