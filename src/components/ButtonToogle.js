import React from 'react'
import { StyledFilterButton } from '../styles/styledComponents/StyledFilterButton'
import handleClick from '../helpers/HandleClick'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import PropTypes from 'prop-types'

ButtonToogle.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  usuario: PropTypes.bool,
  open: PropTypes.bool
}

function ButtonToogle ({ children, name, usuario, open }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const handleClickButton = ({ target: { name } }) => {
    setIsOpen(!isOpen)
    handleClick(name, isOpen)
  }
  React.useEffect(() => {
    setIsOpen(open)
  }
  , [open])

  return (
    <StyledFilterButton
      onClick={handleClickButton}
      name={name}
      type="button"
      usuario={usuario}
    >
      {!isOpen
        ? (
        <ArrowForwardIosIcon className="icon" />
          )
        : (
        <ArrowForwardIosIcon
          className="icon"
          style={{
            transform: 'rotate(90deg)'
          }}
        />
          )}{' '}
      {children}
    </StyledFilterButton>
  )
}

export default ButtonToogle
