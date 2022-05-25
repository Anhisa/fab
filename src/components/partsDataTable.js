import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
export const UserAccount = ({userAccount, userAccountDesc}) => {
  if(userAccountDesc){

    return (
      <>
        <h6 style={{
            color: '#121f45',
          }}>
            {userAccount}
        </h6>
        <p>
            {userAccountDesc}
        </p>
      </>
      
    )
  } else {
    return (
      <>
        <h6 style={{
            color: '#121f45',
          }}>
            {userAccount}
        </h6>
      </>
    )
  }
}

export const IsVerified = ({isVerified}) => {
  return (
    <>
      {isVerified === 'si'? <VerifiedIcon color='primary'/> : <VerifiedIcon color='disabled'/>}
    </>
  )
}

export const BarContainer = ({dataBar}) => {
  return (
    <div  style={{ width: '200px' }} >
      {dataBar}
    </div>
  )
}