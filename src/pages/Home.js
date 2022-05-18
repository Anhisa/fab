import '../styles/App.css';
import { Map } from '../components/Map';
import { Layout } from '../containers/Layout';
import { MapIslands } from '../components/MapIslands';
import { CountryList } from '../containers/CountryDetails';
import { ComparativeTool } from '../containers/ComparativeTool';
import { useState } from 'react';
import { MapStyled } from '../styles/MapStyled';
import { MostRetweetedItems } from '../containers/MostRetweeted';
import { HtMostUsedItems } from '../containers/HtMostUsed';
import { MostMentionedItems } from '../containers/MostMentioned';
import { MostRepliedItems } from '../containers/MostReplied';
import { useGetData } from '../hooks/useGetData';
import { ComparisonStyled } from '../styles/ComparisonStyled';
import { TableContext } from '../context/TableContext';
import { CollapsableTableStyled } from '../styles/collapsableTable';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/official-accounts';
// import userQueries from './queries.php';

export const Home = () => {
  const response = useGetData(api);
  const items = response.data;
  const [accounts, setAccounts] = useState([]);
  const [dataComparing, setDataComparing] = useState({
    accounts: {
      accountIdA: '',
      accountIdB: '',
    },
    categories: {
      mostRetweeted: true,
      mostHashtags: true,
      mostMentioned: true,
      mostReplied: true,
    },
    period: {
      startDate: 1,
      endDate: 1,
    },
  });

  const ComponentContainer = (dataComparing) => {
    const { categories, accounts, period } = dataComparing;
    const { accountIdA, accountIdB } = accounts;
    const { startDate, endDate } = period;
    
    if(accountIdA === '' || accountIdB === '') {
      return (
        <div>
          <h1>Please select two accounts to compare</h1>
        </div>
      )
    }

    const handleOpen = () => {
      const table = document.getElementById('table');      
      if(table.classList.contains('closed')) {
        table.classList.remove('closed');
        table.classList.add('open');
      } else {
        table.classList.add('closed');
        table.classList.remove('open');
      }      


    }
    return (
      <>
        {categories.mostRetweeted && (
          <CollapsableTableStyled>
          <button className="collapsable-button" onClick={handleOpen}>
            <h1>Most Retweeted</h1>
          </button>
          <ComparisonStyled className='closed' id='table'>
            <div className="left">
              <MostRetweetedItems accountId={accountIdA} periodId={period} />
            </div>
            <div className="right">
              <MostRetweetedItems accountId={accountIdB} periodId={period} />
            </div>
          </ComparisonStyled>
          </CollapsableTableStyled>
        )}
        {categories.mostReplied && <MostRepliedItems />}
        {categories.mostHashtags && <HtMostUsedItems />}
        {categories.mostMentioned && <MostMentionedItems />}
        {/* {categories.mostRetweeted && <MostRetweetedItems data={{accountIdA,endDate}}/>}
        
        {categories.mostMentioned && <MostMentionedItems />}
        {categories.mostReplied && <MostRepliedItems />} */}
      </>
    );
  };

  return (
    <Layout>
      <div className="banner-container">
        <h2 className="banner-title">
          LA DIPLOMACIA DIGITAL DE LA REPÚBLICA POPULAR DE CHINA RPCh EN AMÉRICA
          LATINA Y EL CARIBE
        </h2>
        <p className="banner-desc">
          En esta investigación se recopilaron los resultados obtenidos a partir
          de la revisión de las dinámicas en el uso de las cuentas de Twitter
          pertenecientes a las representaciones y los representantes
          diplomáticos de la RPCh en ALC.
        </p>
      </div>
      <div className="row">
        <MapStyled className="map-container col-7">
          <Map items={items} setAccounts={setAccounts} />
        </MapStyled>
        <div className="col-5">
          <CountryList accounts={accounts} />
         
            <ComparativeTool setDataComparing={setDataComparing} />
         
        </div>
        <TableContext.Provider value={ dataComparing }>
        {ComponentContainer(dataComparing)}
        </TableContext.Provider>
      </div>
    </Layout>
  );
};
