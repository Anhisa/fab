import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AccountDetails from '../pages/AccountDetails'

function RoutesApp () {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/en/digital-diplomacy"
        element={<Home />}
      />
      <Route
        path={'/en/digital-diplomacy/:countryId/:account'}
        element={<AccountDetails />}
      />
    </Routes>
  </BrowserRouter>
  )
}

export default RoutesApp
