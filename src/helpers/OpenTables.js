export default function openTables (open, setOpen) {
  let elements
  if (open) {
    elements = document.getElementsByClassName('open')
  } else {
    elements = document.getElementsByClassName('closed')
  }
  const options = []
  for (const element of elements) {
    options.push(element.getAttribute('id'))
  }
  options.forEach((item) => {
    const element = document.getElementById(item)
    if (open) {
      element.classList.remove('open')
      element.classList.add('closed')
    } else {
      element.classList.remove('closed')
      element.classList.add('open')
    }
  })
  const firstOption = document.getElementById(options[0])
  if (!open) {
    firstOption.scrollIntoView({ behavior: 'smooth' })
  }
  setOpen(!open)
}
