import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  // ZoomableGroup
} from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/Anhisa/caribbean/main/islandsMap.json';

const markers = [
  {
    markerOffset: -25,
    name: 'Buenos Aires',
    coordinates: [-58.3816, -34.6037],
  },
  { markerOffset: 12, name: 'La Paz', coordinates: [-68.1193, -16.4897] },
  { markerOffset: 12, name: 'Brasilia', coordinates: [-47.8825, -15.7942] },
  { markerOffset: 15, name: 'Santiago', coordinates: [-70.6693, -33.4489] },
  { markerOffset: 12, name: 'Bogotá', coordinates: [-74.0721, 4.711] },
  { markerOffset: 25, name: 'Quito', coordinates: [-78.4678, -0.1807] },
  { markerOffset: -27, name: 'Georgetown', coordinates: [-58.1551, 6.8013] },
  { markerOffset: 12, name: 'Asunción', coordinates: [-57.5759, -25.2637] },
  { markerOffset: 12, name: 'Paramaribo', coordinates: [-55.2038, 5.852] },
  { markerOffset: 10, name: 'Montevideo', coordinates: [-56.1645, -34.9011] },
  { markerOffset: 12, name: 'Caracas', coordinates: [-66.9036, 10.4806] },
  { markerOffset: 12, name: 'Lima', coordinates: [-77.0428, -12.0464] },
];

function MapIslands() {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [63, -14, 0],
        scale: 3850,
      }}
    >
      <Geographies geography={geoUrl} id="islands">
        {({ geographies }) =>
          geographies
            .filter((d) => d.properties.SUBREGION  === 'Caribbean')
            .map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#BBB"
                stroke="#D6D6DA"
                // onClick={}
              />
            ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
}

export { MapIslands };
