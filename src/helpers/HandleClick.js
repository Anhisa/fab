function handleClick (name, state) {
  const element = document.getElementById(name)
  if (state) {
    if (element.classList.contains('open')) {
      element.classList.remove('open')
      element.classList.add('closed')
      element.scrollTop = 0
    }
  } else {
    if (element.classList.contains('closed')) {
      element.classList.remove('closed')
      element.classList.add('open')
      return element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
export default handleClick
