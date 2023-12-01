import ProgressBar from 'react-bootstrap/ProgressBar'
import React from 'react'

function getMaxValue (dataAccounts) {
  let maxValue = 0

  if (Object.keys(dataAccounts).length < 3) {
    dataAccounts.forEach((item) => {
      const tweetNumber = item.map((innerItem) => {
        if (innerItem.tweets_number) {
          return parseInt(innerItem.tweets_number)
        }

        return innerItem.mentions_number
      }
      )

      const innerMaxValue = Math.max(...tweetNumber)
      if (innerMaxValue > maxValue) {
        maxValue = innerMaxValue
      }
    })
  } else {
    maxValue = Math.max(dataAccounts)
  }

  return maxValue
}
export function CreateChart (dataAccounts) {
  // get max value from list

  const maxValue = getMaxValue(dataAccounts)
  const maxValueClosest = Math.ceil(maxValue / 10) * 10

  const arrayBarPerAccount = []

  if (Object.keys(dataAccounts).length < 3) {
    dataAccounts.forEach((item) => {
      const tweetNumber = item.map((innerItem) => {
        if (innerItem.tweets_number >= 0) {
          return innerItem.tweets_number
        } else {
          return parseInt(innerItem.mentions_number)
        }
      }
      )

      const progressBarList = tweetNumber.map((item2, index) => {
        return (
        <>
        <ProgressBar
          variant="warning"
          key={index}
          max={maxValueClosest}
          now={item2}
          animated={true}
          label={
            <p
              style={{
                color: '#121f45',
                fontSize: '14px',
                fontWeight: '800',
                margin: '0px',
                padding: '0px',
                width: '50px',
                position: 'absolute',
                left: '25px'
              }}
            >
              {item2}
            </p>
          }
        />

        </>
        )
      })
      arrayBarPerAccount.push(progressBarList)
    })
  }
  return arrayBarPerAccount
}
