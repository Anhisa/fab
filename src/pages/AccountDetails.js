import React, { useContext, useEffect, useState } from 'react'
import MonthlyTweetsItems from '../containers/MonthlyTweets'
import { useParams } from 'react-router'
import ViewUserCard from '../components/ViewUserCard'
import {
  UserCardStyled
} from '../styles/styledComponents/userCardStyled'
import HeaderUserCard from '../components/HeaderUserCard'
import { AccountDetailsStyled } from '../styles/styledComponents/AccountDetailsStyled'
import { CompPeriodSlider } from '../components/CompPeriodSlider'

import NavBar from '../components/NavBar'
import ErrorComponent from '../components/errorComponent'
import { AccountPeriodContainer } from '../styles/styledComponents/AccountPeriodContainer'
import ComparativeUserViewContainer from '../containers/ComparativeUserView/ComparativeUserViewContainer'
import { GoblalStyles } from '../styles/styledComponents/GlobalStyles'
import { TableContext } from '../context/InitialState'
import useQueryData from '../hooks/useQueryData'

export default function AccountDetails () {
  const { account, countryId } = useParams()
  const { fol } = useQueryData()
  // console.log('🚀 ~ file: AccountDetails.js:23 ~ AccountDetails ~ fol:', fol)
  const [,, themeToggler] = useContext(TableContext)
  const [period, setPeriod] = useState({
    startDate: 1,
    endDate: 7
  })
  const [dataSearch, setDataSearch] = useState(false)

  useEffect(() => {
    const country = fol.find((item) => item.country_id === countryId)
    const userId = fol.filter((item) => item.official_account === account)
    if (userId.length === 0) {
      return
    }

    setDataSearch({
      Country: country.country_id,
      dataUser: userId,
      userOfficialName: userId.find((id) => id.country_id === country.country_id).official_account_name_spa,
      accounts: {
        accountIdA: {
          id: userId.find((id) => id.country_id === country.country_id).official_account_id,
          name: userId.find((id) => id.country_id === country.country_id).official_account
        }
      },
      period
    })
  }, [fol, account, period, countryId])

  if (fol.length === 0) {
    return <div>Error no hay data en ese Usuario</div>
  }

  return (
    <>
      {dataSearch !== false
        ? (
        <>
          <GoblalStyles />
          <AccountDetailsStyled>
            <NavBar themeToggler ={themeToggler}/>
            <HeaderUserCard
              countryId={dataSearch.Country}
              userName={dataSearch.userOfficialName}
            />
            <UserCardStyled>
              <section className="left">
                <ViewUserCard
                  data={dataSearch.dataUser}
                  period={dataSearch.period}
                />
              </section>
              <section className="right">
                <MonthlyTweetsItems period={period} context={dataSearch} />
              </section>
            </UserCardStyled>
            {/* <AllDataByAccount /> */}
            <hr />
            <AccountPeriodContainer>
              <CompPeriodSlider
                setPeriod={setPeriod}
                data={dataSearch.dataUser}
              />
            </AccountPeriodContainer>
            <hr />
            <ComparativeUserViewContainer
              period={period}
              usuario={true}
              context={dataSearch}
            />
          </AccountDetailsStyled>
        </>
          )
        : (
        <ErrorComponent />
          )}
    </>
  )
}
