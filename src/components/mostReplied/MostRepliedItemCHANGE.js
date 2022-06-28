import PropTypes from 'prop-types'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import DataTableGn from '../DataTableGn'

MostRepliedItemCHANGE.propTypes = {
  newData: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  arrayBar: PropTypes.array.isRequired
}

export function MostRepliedItemCHANGE ({ newData, title, arrayBar }) {
  const accountInfo = []
  const account = newData[0]

  if (account) {
    accountInfo.push(account.official_account)
    // accountInfo.push(account.period_id);
    accountInfo.push(account.official_account_name_spa)
    accountInfo.push(account.most_retweeted_category_desc_spa)
  }

  function createData (
    userAccountDesc,
    userAccount,
    categoría,
    tweetsNumber,
    catDesc
  ) {
    return {
      userAccountDesc,
      userAccount,
      categoría,
      tweetsNumber,
      catDesc
    }
  }

  let rows = newData.map((item) =>
    createData(
      item.most_replied_description_spa,
      item.user_account,
      item.most_replied_category_spa,
      parseInt(item.tweetsNumber),
      item.most_replied_category_desc_spa
    )
  )

  rows = rows.map((item, index) => {
    return {
      ...item,
      tweets_number: arrayBar[index]
    }
  })
  return <DataTableGn rows={rows} title={title} />
}

/*
 return (
    <div>
      <h1>cuenta oficial:<Link to={`/diplomacia-digital/${newData[0].official_account}`}>{newData[0].official_account}</Link> </h1>
      <h1>Periodo de {periodId.startDate.toString()} a {periodId.endDate.toString()}</h1>
      <h1>menciones totales del periodo: {totaltweets}</h1>
      {newData.map((data) => (
        <div key={data.users_most_replied_id}>
            <span>
              {data.user_account} -{' '}
              {data.most_replied_description_spa} -{' '}
              {data.most_replied_category_spa} -{' '}
              {data.most_replied_category_desc_spa} -{' '}
              {data.tweets_number} - {data.period_id} -{' '}
              {data.user_accounts_verified}
            </span>
          </div>
        ))}
    </div>
  );
  */
