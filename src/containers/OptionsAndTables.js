import React from 'react'
import PropTypes from 'prop-types'

const OptionsAndTables = ({ children }) => {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          open,
          setOpen
        })
      }
      )}
    </>
  )
}

OptionsAndTables.propTypes = {
  children: PropTypes.node.isRequired
}

export default OptionsAndTables
