function handleClick(e) {   

  const element = document.getElementById(e.target.name);
  if (element.classList.contains('closed')) {
    element.classList.remove('closed');
    element.classList.add('open');
    element.scrollIntoView({ behavior: 'smooth' });
  }
  else {
    element.classList.add('closed');
    element.classList.remove('open');
    element.scrollTop = 0;
  }
}
export default handleClick