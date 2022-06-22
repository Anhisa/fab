import { useTheme } from '../hooks/useTheme'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../styles/styledComponents/Themes'
import React, { lazy, Suspense } from 'react'
import RoutesApp from './RoutesApp'

const DataProvider = lazy(() => import('../context/dataContext'))

export const App = () => {
  const [theme, themeToggler] = useTheme()

  return (
    <Suspense fallback={<></>}>
    <DataProvider>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <RoutesApp themeToggler={themeToggler}/>
      </ThemeProvider>
      </DataProvider>
    </Suspense>
  )
}
