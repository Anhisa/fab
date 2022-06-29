import { useTheme } from '../hooks/useTheme'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../styles/styledComponents/Themes'
import React from 'react'
import RoutesApp from './RoutesApp'
import { ComparingDataContext } from '../context/InitialState'

import QueryData from '../context/dataContext'

export const App = () => {
  const [theme, themeToggler] = useTheme()

  return (
    <QueryData>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <ComparingDataContext themeToggler={themeToggler}>
          <RoutesApp />
        </ComparingDataContext>
      </ThemeProvider>
    </QueryData>
  )
}
