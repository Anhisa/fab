import React from 'react'
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone'
const UpArrow = () => {
  function handleClick () {
    window.scrollTo(0, 0, {
      behavior: 'smooth'
    })
  }
  return (
    <div
      style={{
        position: 'fixed',
        width: '50px',
        bottom: '20px',
        right: '20px',
        zIndex: '999',
        cursor: 'pointer'
      }}
      onClick={handleClick}
    >
      <ArrowCircleUpTwoToneIcon color="primary" fontSize="large" />
    </div>
  )
}

export default UpArrow
