import React from 'react'
import Lottie from 'lottie-react'
import lootieLoading from '../loader/107220-loading-circles.json'

const Loading = () => {
  return (
    <div
      className="spinner"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Lottie animationData={lootieLoading} loop={true} label="loading" />
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}

export default Loading
