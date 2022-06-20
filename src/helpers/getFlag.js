export function getFlag (countryName) {
  let countryNameEng = countryName.trim().split(' ').join('%20')
  if (countryNameEng === 'Surinam') {
    countryNameEng = 'Suriname'
  }

  if (countryNameEng === 'Bahamas') {
    countryNameEng = 'The Bahamas'
  }

  const apiFlags = 'https://countryflagsapi.com/png/'
  const flagUrl = `${apiFlags}${countryNameEng}`
  return flagUrl
}
