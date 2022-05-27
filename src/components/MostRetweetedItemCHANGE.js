import React from 'react';
import { useGetData } from '../hooks/useGetData';
import 'bootstrap/dist/css/bootstrap.css';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { StyledDataTable } from '../styles/styledComponents/StyledDataTable';
import { CreateChart } from '../helpers/createChart';

import { BarContainer, IsVerified, UserAccount } from './partsDataTable';
import { ExpandedComponent } from './ExpandedComponent';
export const MostRetweetedItemChange = ({ newData, period, comparisonView, arrayBar, title }) => {
  const tweetNumber = newData.map((item) => parseInt(item.tweets_number));
  
  
  const totaltweets = tweetNumber.reduce(
    (totaltweetsNumber, item) => totaltweetsNumber + item,
    0
  );
  
  const columns = [
    {
      name: 'Usuario/Nombre de la cuenta',
      selector: (row) =>  <UserAccount userAccount={row.userAccount} userAccountDesc={row.userAccountDesc } />   ,
    
      id: 'nombreCuenta',
      grow: 2,
      wrap: true,
      maxWidth: '400px',
      minWidth: '200px',
      compact: true,
    },
  
    {
      name: 'Categoría',
      selector: (row) => row.categoría,
      sortable: true,
      id: 'categoria',
      grow: 2,
      wrap: true,
      maxWidth: '350px',
      minWidth: '200px',
      compact: true,
      

      omit: comparisonView
  
    },
    {
      name: 'Verificado',
      selector: (row) =>  <IsVerified isVerified={row.isVerified} />,
      sortable: true,
      id: 'isVerified',
      grow: 2,
      wrap: false,
      center:true,
      width: '150px',
     
    }
    ,
    {
      name: 'Número de Tweets',
      selector: (row) => <BarContainer dataBar={row.tweets_number} />,
      sortable: true,
      id: 'tweetsNumber',
      grow: 2,
      wrap: false,
      maxWidth: '500px',
      width: '220px'
    },
  ];

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