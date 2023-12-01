export function getFlag (countryName) {
  let countryNameEng = countryName
  if (countryNameEng === 'Surinam') {
    countryNameEng = 'sr'
  }
  if (countryNameEng === 'Bahamas') {
    countryNameEng = 'bs'
  }
  if (countryNameEng === 'Antigua and Barbuda') {
    countryNameEng = 'ag'
  }
  if (countryNameEng === 'Argentina') {
    countryNameEng = 'ar'
  }
  if (countryNameEng === 'Barbados') {
    countryNameEng = 'bb'
  }
  if (countryNameEng === 'Belize') {
    countryNameEng = 'bz'
  }
  if (countryNameEng === 'Bolivia') {
    countryNameEng = 'bo'
  }
  if (countryNameEng === 'Brazil') {
    countryNameEng = 'br'
  }
  if (countryNameEng === 'Chile') {
    countryNameEng = 'cl'
  }
  if (countryNameEng === 'Colombia') {
    countryNameEng = 'co'
  }
  if (countryNameEng === 'Costa Rica') {
    countryNameEng = 'cr'
  }
  if (countryNameEng === 'Cuba') {
    countryNameEng = 'cu'
  }
  if (countryNameEng === 'Dominica') {
    countryNameEng = 'dm'
  }
  if (countryNameEng === 'Ecuador') {
    countryNameEng = 'ec'
  }
  if (countryNameEng === 'Ecuador') {
    countryNameEng = 'ec'
  }
  if (countryNameEng === 'El Salvador ') {
    countryNameEng = 'sv'
  }
  if (countryNameEng === 'Grenada') {
    countryNameEng = 'gd'
  }
  if (countryNameEng === 'Guatemala') {
    countryNameEng = 'gt'
  }
  if (countryNameEng === 'Guyana') {
    countryNameEng = 'gy'
  }
  if (countryNameEng === 'Haiti') {
    countryNameEng = 'ht'
  }
  if (countryNameEng === 'Honduras') {
    countryNameEng = 'hn'
  }
  if (countryNameEng === 'Jamaica') {
    countryNameEng = 'jm'
  }
  if (countryNameEng === 'Mexico') {
    countryNameEng = 'mx'
  }
  if (countryNameEng === 'Nicaragua') {
    countryNameEng = 'ni'
  }
  if (countryNameEng === 'Panama') {
    countryNameEng = 'pa'
  }
  if (countryNameEng === 'Paraguay') {
    countryNameEng = 'py'
  }
  if (countryNameEng === 'Peru') {
    countryNameEng = 'pe'
  }
  if (countryNameEng === 'Dominican Republic') {
    countryNameEng = 'do'
  }
  if (countryNameEng === 'Saint Kitts and Nevis') {
    countryNameEng = 'kn'
  }
  if (countryNameEng === 'Saint Vincent and the Grenadines') {
    countryNameEng = 'vc'
  }
  if (countryNameEng === 'Saint Lucia') {
    countryNameEng = 'lc'
  }
  if (countryNameEng === 'Trinidad and Tobago') {
    countryNameEng = 'tt'
  }
  if (countryNameEng === 'Uruguay') {
    countryNameEng = 'uy'
  }
  if (countryNameEng === 'Venezuela') {
    countryNameEng = 've'
  }

  const apiFlags = `https://flagcdn.com/w320/${countryNameEng}.webp`
  // const flagUrl = `${apiFlags}${countryNameEng}`
  return apiFlags
}
