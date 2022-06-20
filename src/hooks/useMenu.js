import { useState } from 'react'

export default function useMenu () {
  const [showMap, setShowMap] = useState(true)
  const [showAccountComparing, setShowAccountComparing] = useState(false)
  const [showPeriodComparing, setShowPeriodComparing] = useState(false)
  const menu = {
    showMap,
    showAccountComparing,
    showPeriodComparing,
    setShowMap,
    setShowAccountComparing,
    setShowPeriodComparing
  }

  return menu
}
