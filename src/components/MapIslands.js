import React, { useState } from 'react';

import { scaleLinear } from 'd3-scale';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import { useGetTweetsByCountry } from '../helpers/getTweetsByCountry';

const geoUrl =
  'https://raw.githubusercontent.com/Anhisa/fab/main/latin_america_and_caribbean.json';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/official-accounts';

export const MapIslands = ({ setAccounts, items, setMouse, countryListManagmentOpen, setCountrySelectedId }) => {
  const [position, setPosition] = useState({
    coordinates: [-73, 16],
    zoom: 1,
  });
  const { open, setOpen } = countryListManagmentOpen;

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

  const handleOnClick = ({ target, pageX, pageY }) => {
    if (target.attributes.value) {
      const itemValue = target.attributes.value;


      const filteredAccounts = items.filter(
        (item) => item.country_id === itemValue.value
      );
      setMouse({
        x: pageX,
        y: pageY ,
      });
      setAccounts(filteredAccounts);
      setCountrySelectedId(itemValue.value);
      if (!open || open) {
        return setOpen(true);
      } 
    }

    return setOpen(false);
  };

  let tweetsByCountry = useGetTweetsByCountry();

  const colorScale = scaleLinear()
    .domain([0, 11161])
    .range(['#edf7ff', '#1d9bf0']);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    }}>
    <h4
    style={{
      marginLeft: '150px',
    }}
    >El Caribe</h4>
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [49, -67.5, 0],
          scale: 1700,
        }}
        onClick={handleOnClick}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies geography={geoUrl} style={{ cursor: 'pointer' }}>
            {({ geographies }) =>
              geographies
                .filter(
                  (d) => d.properties.SUBREGION === 'Caribbean'
                )
                .map((geo) => {
                  const d = tweetsByCountry.find(
                    (s) => s.countryId === geo.properties.COUNTRY_ID
                  );
                  return (
                    <Geography
                      className="geo"
                      key={geo.rsmKey}
                      geography={geo}
                      fill={
                        d ? colorScale(d['total_tweets_period']) : '#F5F4F6'
                      }
                      value={geo.properties.COUNTRY_ID}
                      stroke="#D6D6DA"
                      strokeWidth="0.4"
                    />
                  );
                })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <div className="controls">
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
      </div>
    </div>
  );
};
