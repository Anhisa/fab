import PropTypes from 'prop-types'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import DataTableGn from '../DataTableGn'

MostMentionedItemCHANGE.propTypes = {
  newData: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  arrayBar: PropTypes.array.isRequired
}

export function MostMentionedItemCHANGE ({ newData, title, arrayBar }) {
  if (arrayBar === undefined) {
    return null
  }

  // const tweetNumber = newData.map((item) => parseInt(item.mentions_number))
  // const totaltweets = tweetNumber.reduce(
  //   (totaltweetsNumber, item) => totaltweetsNumber + item,
  //   0
  // )
  const accountInfo = []
  const account = newData[0]

  if (account) {
    accountInfo.push(account.official_account)
    // accountInfo.push(account.period_id);
    accountInfo.push(account.official_account_name_eng)
    accountInfo.push(account.most_retweeted_category_desc_eng)
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
      tweets_number: tweetsNumber,
      catDesc
    }
  }

  let rows = newData.map((item) =>
    createData(
      item.most_mentioned_description_eng,
      item.user_account,
      item.most_mentioned_category_eng,
      parseInt(item.mentions_number),
      item.most_mentioned_category_desc_eng
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
