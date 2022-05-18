import React from 'react';
import { useGetData } from '../hooks/useGetData';
import 'bootstrap/dist/css/bootstrap.css';
import DataTable from 'react-data-table-component';

const api = 'https://fundacionandresbello.local/wp-json/fab/v1/most-retweeted';

export const MostRetweetedItem = () => {
  const response = useGetData(api);
  const items = response.data;
  let accountId = '15';
  let periodId = '1';
  const tweetNumber = items
    .filter(
      (item) =>
        item.official_account_id === accountId && item.period_id === periodId
    )
    .map((item) => parseInt(item.tweets_number));
  const totaltweets = tweetNumber.reduce(
    (totaltweetsNumber, item) => totaltweetsNumber + item,
    0
  );
  const accountInfo = [];
  const account = items
    .filter(
      (item) =>
        item.official_account_id === accountId && item.period_id === periodId
    )
    .find((item) => item.official_account_id === accountId);
  if (account) {
    accountInfo.push(account.official_account);
    accountInfo.push(account.period_id);
    accountInfo.push(account.official_account_name_spa);
    accountInfo.push(account.most_retweeted_category_desc_spa);
  }

  const data = items.filter(
    (item) =>
      item.official_account_id === accountId && item.period_id === periodId
  );

  const columns = [
    {
      name: 'Cuenta retuiteada',
      selector: (row) => row.user_account,
      sortable: true,
    },
    {
      name: 'Nombre de la cuenta',
      selector: (row) => row.most_retweeted_description_spa,
      sortable: true,
    },
    {
      name: 'Categoría',
      selector: (row) => row.most_retweeted_category_spa,
      sortable: true,
    },
    {
      name: 'Número de tweets',
      selector: (row) => parseInt(row.tweets_number),
      sortable: true,
      right: true,
    },
    {
      button: true,
      cell: () => (
        <div className="App">
        <div className="openbtn text-center">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            Abrir modal
          </button>
          <div className="modal" tabIndex="-1" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal title</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ),
    },
  ];

  return (
    <div className="App">
      <div className="card">
        <h3> {accountInfo[2]} </h3>
        <h3> {accountInfo[0]} </h3>
        <h5>Periodo - {accountInfo[1]} </h5>
        <h5>Tweets totales periodo - {totaltweets} </h5>
        <DataTable
          title="Cuentas más retuiteadas"
          columns={columns}
          data={data}
          defaultSortFieldID={1}
        />
      </div>
    </div>


  );
};
