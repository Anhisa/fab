import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified'
import PropTypes from 'prop-types'

UserAccount.propTypes = {
  userAccount: PropTypes.string.isRequired,
  userAccountDesc: PropTypes.string
}

export function UserAccount ({ userAccount, userAccountDesc }) {
  if (userAccountDesc) {
    return (
      <>
        <h6>
          {userAccount}
          </h6>
        <p

          >{userAccountDesc}</p>
      </>
    )
  } else {
    return (
      <>
        <h6

        >{userAccount}</h6>
      </>
    )
  }
}

IsVerified.propTypes = {
  isVerified: PropTypes.string
}

export function IsVerified ({ isVerified }) {
  return (
    <>
      {isVerified === 'si'
        ? (
        <VerifiedIcon color="primary" />
          )
        : (
        <VerifiedIcon color="disabled" />
          )}
    </>
  )
}

BarContainer.propTypes = {
  dataBar: PropTypes.object
}
export function BarContainer ({ dataBar }) {
  return <div style={{ width: '150px' }}>{dataBar}</div>
}
