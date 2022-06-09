import React from 'react'
import {StyledFilterButton} from '../styles/styledComponents/StyledFilterButton';
import handleClick from '../helpers/HandleClick';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const ButtonToogle = ({children, name}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClickButton = ({target:{name}}) => {
    setIsOpen(!isOpen);
    handleClick(name);
  };
  
  return (
    <StyledFilterButton onClick={handleClickButton} name={name} type='button'>
     {!isOpen ? <ArrowForwardIosIcon className="icon" /> : 
      <ArrowForwardIosIcon className='icon' style={{
        transform: 'rotate(90deg)',
      }} />
     } {children} 
    </StyledFilterButton>
  )
}

export default ButtonToogle