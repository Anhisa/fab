import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AccountDetails from '../pages/AccountDetails'

function RoutesApp () {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/diplomacia-digital"
        element={<Home />}
      />
      <Route
        path={'/diplomacia-digital/:account'}
        element={<AccountDetails />}
      />
    </Routes>
  </BrowserRouter>
  )
}

export default RoutesApp
