import React from 'react'

const useScroll = () => {
  const [scroll, setScroll] = React.useState(0)
  const handleScroll = () => {
    setScroll(window.scrollY)
  }
  React.useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return scroll
}

export default useScroll
