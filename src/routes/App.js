import { useTheme } from '../hooks/useTheme'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../styles/styledComponents/Themes'
import React, { lazy, Suspense } from 'react'
import RoutesApp from './RoutesApp'
import { ComparingDataContext } from '../context/InitialState'

const DataProvider = lazy(() => import('../context/dataContext'))

export const App = () => {
  const [theme, themeToggler] = useTheme()

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <DataProvider>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <ComparingDataContext themeToggler={themeToggler}>
          <RoutesApp/>
        </ComparingDataContext>
      </ThemeProvider>
      </DataProvider>
    </Suspense>
  )
}
