import '../styles/App.css';
import MapChart from './MapChart';
// import userQueries from './queries.php';

function App() {
  return (
    <div>
      <div className="map-container">
        <MapChart />
      </div>
      <button type="button" className="buton">
        click aquí
      </button>
    </div>
  );
}

export default App;
