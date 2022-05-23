import PropTypes from 'prop-types';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { BarContainer, IsVerified, UserAccount } from './partsDataTable';
import { CreateChart } from '../helpers/createChart';
import { StyledDataTable } from '../styles/styledComponents/StyledDataTable';

export const MostRepliedItemCHANGE = ({ newData, periodId }) => {
  const tweetNumber = newData.map((item) => parseInt(item.tweets_number));
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
      item.most_replied_description_spa,
      item.user_account,
      item.most_replied_category_spa,
      parseInt(item.tweets_number),
      item.most_replied_category_desc_spa
    )
  );
  const ExpandedComponent = ({ data }) => data.catDesc;
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
  ];

  return (
    <StyledDataTable className="dataTable">
    <DataTable
      columns={columns}
      data={rows}
      title={
        <>
          <p>
            <b>Usuarios que más han recibido respuesta</b>
          </p>
        </>
      }
      expandableRows
      expandableRowsComponent={ExpandedComponent}
      striped={true}
    />
    </StyledDataTable>
  );
};

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
