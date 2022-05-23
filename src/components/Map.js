import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/Anhisa/fab/main/latin_america_and_caribbean.json';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/official-accounts';

  export const Map = ({ setAccounts, items, setMouse }) => {
    const [position, setPosition] = useState({ coordinates: [-75, -10], zoom: 1 });

    function handleZoomIn() {
      if (position.zoom >= 4) return;
      setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.1 }));
    }

    function handleZoomOut() {
      if (position.zoom <= 1) return;
      setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.1 }));
    }

    function handleMoveEnd(position) {
      setPosition(position);
    }
    // const response = useGetData(api);
    // const items = response.data;

    const handleOnClick = (props) => {
      const itemValue = props.target.attributes.value;
      const filteredAccounts = items.filter(
        (item) => item.country_id === itemValue.value
      );
      console.log(props.clientX, props.clientY);
      setMouse({
        x: props.pageX,
        y: props.pageY,
      })
      setAccounts(filteredAccounts);
    };

    return (
        <><ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [73, 11, 0],
          scale: 587,
        }}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies geography={geoUrl} style={{ cursor: 'pointer' }}>
            {({ geographies }) => geographies
              .filter(
                (d) => d.properties.REGION_WB === 'Latin America & Caribbean'
              )
              .map((geo) => (
                <Geography
                  className="geo"
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#BBB"
                  value={geo.properties.COUNTRY_ID}
                  stroke="#D6D6DA"
                  onClick={handleOnClick} />
              ))}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap><div className="controls">
          <button onClick={handleZoomIn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <button onClick={handleZoomOut}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div></>
    );
  };

