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
import { useGetTweetsByCountry } from '../helpers/getTweetsByCountry';

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
  let tweetsByCountry =  useGetTweetsByCountry()
  console.log(tweetsByCountry, '⛳')
  useEffect(() => {}, [dataComparing]);

  return (
    <Layout>
      <div className="banner-container">
        <h2 className="banner-title">
          CHINA LATAM TWITTER DATABASE
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
          <Map
            items={items}
            setAccounts={setAccounts}
            setMouse={setMousePosition}
          />
        </MapStyled>
        <DetachableTable
          className="closed"
          top={mousePosition.y}
          left={mousePosition.x}
        >
          <CountryList accounts={accounts} />
        </DetachableTable>
        <div className="col-5">
          <ComparativeTool setDataComparing={setDataComparing} />
        </div>

        <ComponentContainer context={dataComparing} />
      </div>
    </Layout>
  );
};
