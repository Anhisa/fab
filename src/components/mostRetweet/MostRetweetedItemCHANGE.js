import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'
import DataTableGn from '../DataTableGn'

MostRetweetedItemChange.propTypes = {
  newData: PropTypes.array.isRequired,
  arrayBar: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

export default function MostRetweetedItemChange ({ newData, arrayBar, title }) {
  if (arrayBar === undefined) {
    return <>Cargando</>
  }

  let rows = newData.map((item) =>
    createData(
      item.most_retweeted_description_spa,
      item.user_account,
      item.most_retweeted_category_spa,
      parseInt(item.tweetsNumber),
      item.user_accounts_verified,
      item.most_retweeted_category_desc_spa
    )
  )
  rows = rows.map((item, index) => {
    return {
      ...item,
      tweets_number: arrayBar[index]
    }
  })

  return (
    <DataTableGn rows={rows} title={title} />
  )
}

function createData (
  userAccountDesc,
  userAccount,
  categoría,
  tweetsNumber,
  isVerified,
  catDesc
) {
  return {
    userAccountDesc,
    userAccount,
    categoría,
    tweetsNumber,
    isVerified,
    catDesc
  }
}
