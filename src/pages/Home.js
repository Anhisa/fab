import '../styles/App.css';
import { Map } from '../components/Map';
import { Layout } from '../containers/Layout';
import { MapIslands } from '../components/MapIslands';
import {AccountList} from '../components/CountryDetails';

// import userQueries from './queries.php';

export const Home =  () => {
  return (
    <Layout>
      <div className="banner-container">
        <h2 className="banner-title">LA DIPLOMACIA DIGITAL DE LA REPÚBLICA POPULAR DE CHINA RPCh EN AMÉRICA LATINA Y EL CARIBE</h2>
        <p className="banner-desc">En esta investigación se recopilaron los resultados obtenidos a partir de la revisión de las dinámicas en el uso de las cuentas de Twitter pertenecientes a las representaciones y los representantes diplomáticos de la RPCh en ALC.</p>

      </div>
      <div className="map-container-islands">
        <MapIslands id="islands" />
      </div>
      <div className="map-container">
        <Map />
      </div>
      <AccountList />
      <button type="button" className="button">
        click aquí
      </button>
    </Layout>
  );
}


