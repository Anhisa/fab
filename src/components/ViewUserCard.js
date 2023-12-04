import React from 'react'

import VerifiedIcon from '@mui/icons-material/Verified'
import {
  UserCardStyled,
  ViewUserCardStyled
} from '../styles/styledComponents/ViewUserCardStyled'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'

ViewUserCard.propTypes = {
  data: PropTypes.array.isRequired,
  period: PropTypes.object.isRequired
}

function ViewUserCard ({ data, period }) {
  const { countryId } = useParams()
  const dataLength = data.length
  let periods
  let i = 1

  if (dataLength !== 3) {
    periods = Object.values(data).map((item) => {
      return parseInt(item.period_id)
    })
  } else {
    periods = Object.values(data).map((item) => {
      return i++
    })
  }
  i = 1
  const totalCalculator = () => {
    if (period.startDate === period.endDate) {
      const indexStart = periods.indexOf(period.startDate)

      return data[indexStart]?.total_tweets_period
    } else {
      const start = periods?.indexOf(period.startDate)
      const end = periods?.indexOf(period.endDate)
      const count = data?.slice(start, end + 1).reduce((acc, curr) => {
        return acc + parseInt(curr?.total_tweets_period)
      }, 0)

      return count
    }
  }
  const totalTweetsPeriod = totalCalculator()

  const followersNumber = data.find((fn) => parseInt(fn.period_id) === period.endDate)?.followers_number
  const followingNumber = data.find((fn) => parseInt(fn.period_id) === period.endDate)?.following_number
  const accountName = data.find((user) => user.country_id === countryId)?.official_account_name_spa

  return (
    <ViewUserCardStyled>
      <div className="innerLeft">
        <UserAccountCard user={data[0].official_account} />
        <hr />
        <UserCard
          name={'Institución / Nombre'}
          data={accountName}
        />
        <hr />
        <UserCard
          name={'Fecha de creación de la cuenta'}
          data={data[0]['official_account creation_date']}
        />
      </div>
      <div className="innerRight">
        <UserCard
          name={'Nº Seguidores'}
          data={followersNumber
            // data[period.endDate - 1]?.followers_number === '0'
            //   ? data[period.endDate - 2]?.followers_number
            //   : data[period.endDate - 1]?.followers_number ?? 'No hay data correspondiente al periodo seleccionado'
            // data[0]?.followers_number
          }
        />
        <hr />
        <UserCard
          name={'Nº cuentas seguidas'}
          data={followingNumber
            // data[period.endDate - 1]?.following_number === '0'
            //   ? data[period.endDate - 2]?.following_number
            //   : data[period.endDate - 1]?.following_number ??
            //     'No hay data correspondiente al periodo seleccionado'
          }
        />
        <hr />
        <UserCard
          name={'Total tuits período'}
          data={
            totalTweetsPeriod ??
            'No hay data correspondiente al periodo seleccionado'
          }
        />
      </div>
    </ViewUserCardStyled>
  )
}

export default ViewUserCard

UserAccountCard.propTypes = {
  user: PropTypes.string.isRequired
}

export function UserAccountCard ({ user }) {
  return (
    <UserCardStyled>
      <div className="firstGroup">
        <div className="dot" />
        <div className="innerGroup">
          <div className="title">
            <h5>Cuenta</h5>
          </div>
          <div className="account">
            <p>{user}</p>
            <div className="verified">
              <VerifiedIcon style={{ color: '#44D549' }} />
            </div>
          </div>
        </div>
      </div>
    </UserCardStyled>
  )
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
}

export function UserCard ({ name, data }) {
  return (
    <UserCardStyled>
      <div className="firstGroup">
        <div className="dot" />
        <div className="innerGroup">
          <div className="title">
            <h5>{name}</h5>
          </div>
          <div className="data">
            <span>{data}</span>
          </div>
        </div>
      </div>
    </UserCardStyled>
  )
}
