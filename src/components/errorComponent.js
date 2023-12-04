import { ErrorStyled } from '../styles/styledComponents/ErrorStyled'
import React from 'react'

function ErrorComponent () {
  // 404 error page
  return (
    <ErrorStyled>
      <h1>404</h1>
      <h2>Page not found</h2>
      <h3>
        <a href="/en/digital-diplomacy">Go to the home page</a>
      </h3>
    </ErrorStyled>
  )
}

export default ErrorComponent
