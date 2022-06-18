import PropTypes from 'prop-types'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import DataTable from 'react-data-table-component'
import {
  EmptyDataTable,
  StyledDataTable
} from '../../styles/styledComponents/StyledDataTable'
import { ExpandedComponent } from '../ExpandedComponent'
import { columns } from '../../helpers/columns'

MostMentionedItemCHANGE.propTypes = {
  newData: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  arrayBar: PropTypes.array.isRequired
}

export function MostMentionedItemCHANGE ({
  newData,
  title,
  arrayBar
}) {
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
      tweets_number: tweetsNumber,
      catDesc
    }
  }

  let rows = newData.map((item) =>
    createData(
      item.most_mentioned_description_spa,
      item.user_account,
      item.most_mentioned_category_spa,
      parseInt(item.mentions_number),
      item.most_mentioned_category_desc_spa
    )
  )

  rows = rows.map((item, index) => {
    return {
      ...item,
      tweets_number: arrayBar[index]
    }
  })

  return (
    <StyledDataTable className="dataTable">
      <DataTable
        columns={columns}
        data={rows}
        title={
          <>
            <p>
              <b>{title}</b>
            </p>
          </>
        }
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        noDataComponent={
          <EmptyDataTable>
            <h5>No se registran datos en el periodo seleccionado</h5>
          </EmptyDataTable>
        }
      />
    </StyledDataTable>
  )
}
