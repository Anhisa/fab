import '../styles/App.css';
import { Map } from '../components/Map';
import { Layout } from '../containers/Layout';
import { MapIslands } from '../components/MapIslands';
import {AccountList} from '../components/CountryDetails';

// import userQueries from './queries.php';

function Home() {
  return (
    <Layout>
      <div className="map-container">
        <Map />
        <MapIslands id="islands" />
      </div>
      <AccountList />
      <button type="button" className="button">
        click aquí
      </button>
    </Layout>
  );
}

export { Home };
