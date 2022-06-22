import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { AccountDetails } from '../pages/AccountDetails'

RoutesApp.propTypes = {
  themeToggler: PropTypes.func.isRequired
}

function RoutesApp ({ themeToggler }) {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/diplomacia-digital"
        element={<Home themeToggler={ themeToggler} />}
      />
      <Route
        path={'/diplomacia-digital/:account'}
        element={<AccountDetails themeToggler = {themeToggler}/>}
      />
    </Routes>
  </BrowserRouter>
  )
}

export default RoutesApp
