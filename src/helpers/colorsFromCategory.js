import { colorsDictionary } from './colorsDiccionary'

export function colorsFromCategory (categories) {
  const categoriesU = []
  const categoriesColor = []
  const categories1 = categories.map((item) => item.category)

  categories1.forEach((item) => {
    for (let i = 0; i < colorsDictionary.length; i++) {
      if (item === colorsDictionary[i].category) {
        categoriesU.push(item)
        categoriesColor.push(colorsDictionary[i].color)
      }
    }
  })

  return categoriesColor
}
