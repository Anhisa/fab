import React from 'react'
import PropTypes from 'prop-types'
import { HomeStyled } from '../styles/styledComponents/HomeStyled'

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export function Layout ({ children }) {
  return <HomeStyled>{children}</HomeStyled>
}
