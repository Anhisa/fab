import React, { useState, useEffect } from 'react';

import { scaleLinear } from 'd3-scale';
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  ZoomableGroup,
  useZoomPan,
} from 'react-simple-maps';
import { useGetTweetsByCountry } from '../helpers/getTweetsByCountry';

const geoUrl =
  'https://raw.githubusercontent.com/Anhisa/fab/main/latin_america_and_caribbean.json';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/official-accounts';

export const Map = ({
  setAccounts,
  items,
  setMouse,
  countryListManagmentOpen,
  setCountrySelectedId,
  
}) => {
  const [localPosition, setLocalPosition] = useState({
    coordinates: [-85, -15],
    zoom: 1,
  });
  const { open, setOpen } = countryListManagmentOpen;

  function handleZoomIn() {
  
    if (localPosition.zoom >= 4) return;
    setLocalPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.1 }));
  }

  function handleZoomOut() {
 
    if (localPosition.zoom <= 1) return;
    setLocalPosition((pos) => ({ ...pos, zoom: 1 }));
  }

  function handleMoveEnd(position) {   
  
    const {coordinates, zoom} = position;

    setLocalPosition({coordinates, zoom:localPosition.zoom});
  }
  function closeOnZoomIn() {
    setOpen(false);
    //cancel zoom on scroll
  }
  const handleOnClick = (e) => {
    const { target, pageX, pageY } = e;
     
  
    if (target.attributes.value) {
      const itemValue = target.attributes.value;
      let x = pageX;
      let y = pageY;
      const filteredAccounts = items.filter(
        (item) => item.country_id === itemValue.value
      );
      if(pageX + 300 > window.innerWidth){
        if(pageX - 450 < 0){
          x = 350;
        } else {
          x = pageX - 450;
        }
             
      }
      if(pageY + 300 > window.innerHeight){
        if(pageY - 350 < 0){
          y = 0;
        }
        y = pageY - 350;
      }
      console.log('x , y', x, y);
      setMouse({
        x: x,
        y: y,
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
    <div
      className='map'
    >
      <ComposableMap
        height={window.innerHeight * 0.9}
        width={window.innerWidth}
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [77, 15, 0],
          scale: 540,
        }}
        onClick={handleOnClick}
        onWheelCapture={closeOnZoomIn}
        
         
        
        
      >
        < CustomZoomableGroup
          zoom={localPosition.zoom}
          center={localPosition.coordinates}
          positionLocal={localPosition} 
          onMoveEnd={handleMoveEnd}       
                
        >
          <Graticule stroke="#ccc" step={[27, 9]} />

          <Geographies geography={geoUrl} style={{ cursor: 'pointer' }}>
            {({ geographies }) =>
              geographies
                .filter(
                  (d) =>
                    d.properties.SUBREGION === 'South America' ||
                    d.properties.SUBREGION === 'Central America'
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
        </ CustomZoomableGroup>
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

const CustomZoomableGroup = ({ children, positionLocal, setPosition, ...restProps }) => {
  let { mapRef, transformString, position } = useZoomPan(restProps);
 
   
    
    let check = false;
    if(positionLocal.zoom !== 1) {
      check = true;
    }
    
    if (position.dragging?.type === 'wheel' || position.dragging?.type === 'dblclick') {
      
    position= positionLocal;
    return (
      <g 
      ref={mapRef}
      transform={`translate(${positionLocal.coordinates[0]}, ${positionLocal.coordinates[1]}) scale(${positionLocal.zoom})`}
      >
        <g>{children}</g>
      </g>
    );
  }
  if(position.dragging?.type === 'mousemove'){


  }
  
  if (positionLocal.zoom === 1) {
    if (position.x > 0) {
      if (position.x > 465) {
        position.x = 465;
      }
    } else {
      if (position.x < -365) {
        position.x = -365;
      }
    }
  } else {
    check = true;
  }
  return (
    <g ref={mapRef}>
      
      <g       
        transform={`translate(${position.x} ${
          check ? position.y : ''
        }  ) scale(${positionLocal.zoom})`}
      >
        {children}
      </g>
    </g>
  );
};
