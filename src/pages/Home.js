import '../styles/App.css';
import { Map } from '../components/Map';
import { Layout } from '../containers/Layout';
import { CountryList } from '../containers/CountryDetails';
import { ComparativeTool } from '../containers/ComparativeTool';
import { useEffect, useState } from 'react';
import { MapStyled } from '../styles/styledComponents/MapStyled';
import { useGetData } from '../hooks/useGetData';

import { TableContext } from '../context/TableContext';

import { ComponentContainer } from '../hooks/ComponerContainer';
import { DetachableTable } from '../styles/styledComponents/detachableTable';
import { HomeStyled } from '../styles/styledComponents/HomeStyled';
import { ComparativeStyled } from '../styles/styledComponents/ComparativeStyled';
import ComparativePerPeriod from '../components/ComparativePerPeriod';
import SelectorComparative from '../containers/SelectorComparative';


const api = 'https://fundacionandresbello.org/wp-json/fab/v1/official-accounts';
// import userQueries from './queries.php';

export const Home = () => {
  const response = useGetData(api);
  const [open, setOpen] = useState(false);
  const countryListManagment = {open, setOpen};
  const items = response.data;

  const [accounts, setAccounts] = useState([]);
  const [dataComparing, setDataComparing] = useState({
    accounts: {
      accountIdA: '',
      accountIdB: '',
    },
    periodComparison: {
      periodA: '',
      periodB: '',
    },
    isPeriodComparisonActive: false,
    isCountryFilterActive: false,
    country_id: '',
    categories: {
      mostRetweeted: true,
      mostHashtags: true,
      mostMentioned: true,
      mostReplied: true,
      monthlyTweets: true,
    },
    period: {
      startDate: 1,
      endDate: 4,
    },
  });
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {}, [dataComparing]);

  return (
    <HomeStyled className="container-xl">
      <div className="banner-container">
        <h2 className="banner-title">
          CHINA LATAM TWITTER DATABASE
        </h2>
      </div>

      <div className="row">
        <MapStyled className="map-container col-6">
          <Map
            items={items}
            setAccounts={setAccounts}
            setMouse={setMousePosition}
            countryListManagment={countryListManagment}

          />
        </MapStyled>
        <DetachableTable

          top={mousePosition.y}
          left={mousePosition.x}
        >
          <CountryList  accounts={accounts} countryListManagment={countryListManagment} />
        </DetachableTable>
        <div className='right col-6'>
        <ComparativeStyled >
          <ComparativeTool setDataComparing={setDataComparing} />
        </ComparativeStyled>
        <SelectorComparative setDataComparing={setDataComparing}/>

        </div>
        <ComponentContainer context={dataComparing} />
      </div>
    </HomeStyled>
  );
};
