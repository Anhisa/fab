import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  // ZoomableGroup
} from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/Anhisa/fab/main/latin_america_and_caribbean.json';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/official-accounts';


export const Map = ({ setAccounts, items }) => {
  // const response = useGetData(api);
  // const items = response.data;

  const handleOnClick = (props) => {
    const itemValue = props.target.attributes.value;
    const filteredAccounts = items.filter(
      (item) => item.country_id === itemValue.value
    );
    console.log(props.clientX, props.clientY);
    setAccounts(filteredAccounts);
  };

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [73, 11, 0],
        scale: 587,
      }}
    >
      <Geographies geography={geoUrl} style={{ cursor: 'pointer' }}>
        {({ geographies }) =>
          geographies
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
                onClick={handleOnClick}
              />
            ))
        }
      </Geographies>
    </ComposableMap>
  );
};
