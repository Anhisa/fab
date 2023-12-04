import { useState, useEffect } from 'react'

export function useTheme () {
  const dark = window.matchMedia('(prefers-color-scheme: dark)').matches

  const [theme, setTheme] = useState(dark ? 'dark' : 'light')
  const themeToggler = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
    // theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
      if (e.matches) {
        setTheme('dark')
      } else {
        setTheme('light')
      }
    }
    )
  }
  , [])

  return [theme, themeToggler]
}
