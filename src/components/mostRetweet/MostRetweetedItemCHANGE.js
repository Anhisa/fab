import React from 'react';
import { useGetData } from '../../hooks/useGetData';
import 'bootstrap/dist/css/bootstrap.css';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { StyledDataTable } from '../../styles/styledComponents/StyledDataTable';
import { CreateChart } from '../../helpers/createChart';

import { ExpandedComponent } from '../ExpandedComponent';
import { columns } from '../../helpers/columns';
export const MostRetweetedItemChange = ({ newData, period, comparisonView, arrayBar, title }) => {
  const tweetNumber = newData.map((item) => parseInt(item.tweets_number));
  //  For some reason a whole array of arrays is returned
  if (newData[newData.length - 1]?.length > 5) {
    newData.pop();
  }

  
  const totaltweets = tweetNumber.reduce(
    (totaltweetsNumber, item) => totaltweetsNumber + item,
    0
  );


  let rows = newData.map((item) =>
    createData(
      item.most_retweeted_description_spa,
      item.user_account,
      item.most_retweeted_category_spa,
      parseInt(item.tweets_number),
      item.user_accounts_verified,
      item.most_retweeted_category_desc_spa
    )
  );
  rows = rows?.map((item, index) => {
    return {
      ...item,
      tweets_number: arrayBar[index],
  }})

 
 

  return (
    <StyledDataTable className="dataTable">
      <DataTable
        
        title={
          <>
            <p>
              <b>{title}</b>
            </p>
          </>
        }
        columns={columns}
        data={rows}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        striped={true}
        

      />
    </StyledDataTable>
  );
};


function createData(
  userAccountDesc,
  userAccount,
  categoría,
  tweets_number,
  isVerified,
  catDesc
) {
  return {
    userAccountDesc,
    userAccount,
    categoría,
    tweets_number,
    isVerified,
    catDesc,
  };
}