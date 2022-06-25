import { useState, useEffect } from 'react'

export function useTheme () {
  const dark = window.matchMedia('(prefers-color-scheme: dark)').matches

  const [theme, setTheme] = useState(dark ? 'dark' : 'light')
  const themeToggler = () => {
    console.log('alohaaa')
    console.log('theme', theme)
    if (theme === 'light') {
      console.log('light')
      setTheme('dark')
    } else {
      console.log('dark')
      setTheme('light')
    }
    // theme === 'light' ? setTheme('dark') : setTheme('light')
    console.log('theme', theme)
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
