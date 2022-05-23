import PropTypes from 'prop-types';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DataTable from 'react-data-table-component';

import {Link} from 'react-router-dom';
import { BarContainer, IsVerified, UserAccount } from './partsDataTable';
import { CreateChart } from '../helpers/createChart';
import { StyledDataTable } from '../styles/styledComponents/StyledDataTable';


export const MostMentionedItemCHANGE = ({newData, periodId}) => {
 
  const tweetNumber = newData.map((item) => parseInt(item.mentions_number));
  const totaltweets = tweetNumber.reduce(
    (totaltweetsNumber, item) => totaltweetsNumber + item,
    0
  );
  const accountInfo = [];
  const account = newData[0];

  if (account) {
    accountInfo.push(account.official_account);
    // accountInfo.push(account.period_id);
    accountInfo.push(account.official_account_name_spa);
    accountInfo.push(account.most_retweeted_category_desc_spa);
  }

  function createData(
    userAccountDesc,
    userAccount,
    categoría,
    tweets_number,
    catDesc
  ) {
    return {
      userAccountDesc,
      userAccount,
      categoría,
      tweets_number,
     
          catDesc,
     
    };
  }

  let rows = newData.map((item) =>
    createData(
      item.most_mentioned_description_spa,
      item.user_account,
      item.most_mentioned_category_spa,
      parseInt(item.mentions_number),
      item.most_mentioned_category_desc_spa,
      
    )
  );
  let barData = CreateChart(tweetNumber);
  rows = rows.map((item, index) => {
    return {
      ...item,
      tweets_number: barData[index],
    };
  });
  const columns = [
    {
      name: 'Usuario/ Nombre cuenta',
      selector: (row) => (
        <UserAccount
          userAccount={row.userAccount}
          userAccountDesc={row.userAccountDesc}
        />
      ),
      sortable: true,
      wrap: true,
    },
    {
      name: 'Categoría',
      selector: (row) => row.categoría,
      sortable: true,
      id: 'categoria',
      grow: 2,
      wrap: false,
      maxWidth: '300px',
    },
    {
      name: 'Verificado',
      selector: (row) => <IsVerified isVerified={row.isVerified} />,
     
      id: 'isVerified',
      grow: 2,
      wrap: false,
      center: true,
      width: '150px',
    },
    {
      name: 'Número de Tweets',
      selector: (row) => <BarContainer dataBar={row.tweets_number} />,
      sortable: true,
      id: 'tweetsNumber',
      grow: 2,
      wrap: false,
      maxWidth: '400px',
      width: '220px',
    },
  ]
  const ExpandedComponent = ({ data }) => data.catDesc;

  DataTable.propTypes = {
    data: PropTypes.shape({
      userAccountDesc: PropTypes.string.isRequired,
      userAccount: PropTypes.string.isRequired,
      categoría: PropTypes.string.isRequired,
      tweets_number: PropTypes.number.isRequired,
     
      
          catDesc: PropTypes.string.isRequired,
        
      
    }).isRequired,
  };

  return (
    <StyledDataTable className="dataTable">
      <DataTable
        columns={columns}
        data={rows}
        title='Usuarios más mencionados'
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        striped={true}
        />
        </StyledDataTable>
  )

 


 
};


/*
  <div>
      <h1>cuenta oficial:</h1> <Link to={`/diplomacia-digital/${newData[0].official_account}`}>{newData[0].official_account}</Link> 
      <h1>Periodo de {periodId.startDate.toString()} a {periodId.endDate.toString()}</h1>
      <h1>menciones totales del periodo: {totaltweets}</h1>
      {newData
        .map((data) => (
          <div key={`mentioned-${data.users_most_metioned_id}`}>
            <h4>cuenta mencionada: {data.user_account}</h4>
            <p>descripción: {data.most_mentioned_description_spa}</p>
            <p>categoría: {data.most_mentioned_category_spa}</p>
            <p>
              descripción de la categoría:
              {data.most_mentioned_category_desc_spa}
            </p>
            <p>número de menciones: {parseInt(data.mentions_number)}</p>
            <p>cuenta verificada: {data.user_accounts_verified}</p>
          </div>
        ))}
    </div> */