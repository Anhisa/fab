function handleClick(name, close) {   
  const element = document.getElementById(name);
if(close){
  if (element.classList.contains('open')) {
    element.classList.remove('open');
    element.classList.add('closed');
    
  }
  return 
} else {
  if (element.classList.contains('closed')) {
    element.classList.remove('closed');
    element.classList.add('open');
    
  }
  return
}

  
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