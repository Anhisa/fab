import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { HomeStyled } from '../styles/styledComponents/HomeStyled'
const Layout = memo(function memoLayout ({ children }) {
  return <HomeStyled>{children}</HomeStyled>
})

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
