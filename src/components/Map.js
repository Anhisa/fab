import React, { useCallback, memo } from 'react'

import { scaleLinear } from 'd3-scale'
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  // ZoomableGroup,
  useZoomPan
} from 'react-simple-maps'
import { useGetTweetsByCountry } from '../helpers/getTweetsByCountry'
import useWindowSize from '../hooks/useWindowSize'
import PropTypes from 'prop-types'
import useQueryData from '../hooks/useQueryData'
// const geoUrl =
//   'https://raw.githubusercontent.com/Anhisa/fab/main/latin_america_and_caribbean.json';

// eslint-disable-next-line react/display-name
const Map = memo(({
  setAccounts,
  setMouse,
  countryListManagmentOpen,
  setCountrySelectedId
}) => {
  // const [localPosition, setLocalPosition] = useState({
  //   coordinates: [-78, -11],
  //   zoom: 1.2
  // })

  const { open, setOpen } = countryListManagmentOpen
  const windowSize = useWindowSize()

  const { geoUrl, officialAccounts } = useQueryData()
  // function handleZoomIn () {
  //   setZoom(true)
  //   if (localPosition.zoom >= 4) return
  //   setLocalPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.1 }))
  // }

  //   function handleZoomOut () {
  //     setZoom(false)
  //
  //     if (localPosition.zoom <= 1) return
  //     setLocalPosition((pos) => ({ ...pos, zoom: 1 }))
  //   }

  //   function handleMoveEnd (position) {
  //     const { coordinates, zoom } = position
  //
  //     setLocalPosition({ coordinates, zoom: localPosition.zoom })
  //   }
  function closeOnZoomIn () {
    setOpen(false)
    // cancel zoom on scroll
  }
  const handleOnClick = useCallback((e) => {
    const { target, pageX, pageY } = e
    if (target.attributes.value) {
      const itemValue = target.attributes.value
      let x = pageX
      let y = pageY
      const filteredAccounts = officialAccounts.filter(
        (item) => item.country_id === itemValue.value
      )
      if (pageX + 250 > windowSize.width) {
        x = pageX - 250
      }

      if (pageY + 450 > windowSize.height) {
        y = pageY - 250
      }

      setMouse({
        x,
        y
      })

      setAccounts(filteredAccounts)
      setCountrySelectedId(itemValue.value)
      if (!open || open) {
        return setOpen(true)
      }
    }

    return setOpen(false)
  }, [windowSize])

  const tweetsByCountry = useGetTweetsByCountry()

  const colorScale = scaleLinear()
    .domain([0, 11161])
    .range(['#edf7ff', '#1d9bf0'])

  return (
    <div className="map">
      <ComposableMap
        height={windowSize.height ? windowSize.height * 0.98 : 500}
        width={windowSize.width ? windowSize.width * 0.98 : 500}
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [77, 12, 0],
          scale: 448
        }}
        onClick={handleOnClick}
        onWheelCapture={closeOnZoomIn}
      >
        {/* < CustomZoomableGroup
          zoom={localPosition.zoom}
          center={localPosition.coordinates}
          positionLocal={localPosition}
          onMoveEnd={handleMoveEnd}

        > */}
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
                )
                return (
                  <Geography
                    className="geo"
                    key={geo.rsmKey}
                    geography={geo}
                    fill={d ? colorScale(d.total_tweets_period) : '#F5F4F6'}
                    value={geo.properties.COUNTRY_ID}
                    stroke="#D6D6DA"
                    strokeWidth="0.4"
                  />
                )
              })
          }
        </Geographies>
        {/* </ CustomZoomableGroup> */}
      </ComposableMap>
      {/* <div className="controls">
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
      </div> */}
    </div>
  )
})

CustomZoomableGroup.propTypes = {
  children: PropTypes.node.isRequired,
  positionLocal: PropTypes.object.isRequired,
  setPosition: PropTypes.func.isRequired
}

function CustomZoomableGroup ({
  children,
  positionLocal,
  setPosition,
  ...restProps
}) {
  // let { mapRef, transformString, position } = useZoomPan(restProps)
  let { mapRef, position } = useZoomPan(restProps)
  let check = false
  if (positionLocal.zoom !== 1) {
    check = true
  }
  console.log(position.dragging?.type)
  if (
    position.dragging?.type === 'wheel' ||
    position.dragging?.type === 'dblclick'
  ) {
    position = positionLocal
    return (
      <g
        ref={mapRef}
        transform={`translate(${positionLocal.coordinates[0]}, ${positionLocal.coordinates[1]}) scale(${positionLocal.zoom})`}
      >
        <g>{children}</g>
      </g>
    )
  }

  //   if(position.dragging === undefined){
  //     position= positionLocal;
  //     return (
  //       <g
  //       ref={mapRef}
  //       transform={`translate(${positionLocal.coordinates[0]}, ${positionLocal.coordinates[1]}) scale(${positionLocal.zoom})`}
  //       >
  //         <g>{children}</g>
  //       </g>
  //     );
  //
  //   }

  if (positionLocal.zoom === 1) {
    if (position.x > 0) {
      if (position.x > 465) {
        position.x = 465
      }
    } else {
      if (position.x < -365) {
        position.x = -365
      }
    }
  } else {
    check = true
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
  )
}

export default Map
Map.propTypes = {
  setAccounts: PropTypes.func.isRequired,
  setMouse: PropTypes.func.isRequired,
  countryListManagmentOpen: PropTypes.object.isRequired,
  setCountrySelectedId: PropTypes.func.isRequired,
  setZoom: PropTypes.func.isRequired
}
