import React from 'react'

const useOpenList = () => {
  const [open, setOpen] = React.useState(false)
  return [open, setOpen]
}

export default useOpenList
