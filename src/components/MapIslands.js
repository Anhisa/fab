import React from 'react'
import { scaleLinear } from 'd3-scale'
import {
  ComposableMap,
  Geographies,
  Geography,
  useZoomPan,
  Graticule
} from 'react-simple-maps'
import { useGetTweetsByCountry } from '../helpers/getTweetsByCountry'
import useWindowSize from '../hooks/useWindowSize'
import PropTypes from 'prop-types'
import useQueryData from '../hooks/useQueryData'

MapIslands.propTypes = {
  setAccounts: PropTypes.func.isRequired,
  setMouse: PropTypes.func.isRequired,
  countryListManagmentOpen: PropTypes.object.isRequired,
  setCountrySelectedId: PropTypes.func.isRequired,
  setZoom: PropTypes.func.isRequired
}

export default function MapIslands ({
  setAccounts,
  setMouse,
  countryListManagmentOpen,
  setCountrySelectedId,
  setZoom
}) {
  const windowSize = useWindowSize()
  const { geoUrl, officialAccounts } = useQueryData()
  // const [localPosition, setLocalPosition] = useState({
  //   coordinates: [-73, 17],
  //   zoom: 1
  // })
  const { open, setOpen } = countryListManagmentOpen

  // function handleZoomIn() {
  //   setZoom(true)
  //   if (localPosition.zoom >= 4) return
  //   setLocalPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }))
  // }

  // function handleZoomOut() {
  //   setZoom(false)
  //   if (localPosition.zoom <= 1) return
  //   setLocalPosition((pos) => ({
  //     ...pos,
  //     zoom: 1
  //   }))
  // }
  // function closeOnZoomIn() {
  //   setOpen(false)
  //   //cancel zoom on scroll
  // }

  // function handleMoveEnd(position) {
  //   const { coordinates, zoom } = position
  //   setLocalPosition({ coordinates, zoom: localPosition.zoom })
  // }

  const handleOnClick = ({ target, pageX, pageY }) => {
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

      if (pageY + 250 > windowSize.height) {
        y = pageY - 250
      }

      // console.log('x , y', x, y);
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
  }

  const tweetsByCountry = useGetTweetsByCountry()

  const colorScale = scaleLinear()
    .domain([0, 11161])
    .range(['#edf7ff', '#1d9bf0'])

  return (
    <div className="map">
      <ComposableMap
        height={windowSize.height ? windowSize.height * 0.9 : 1000}
        width={windowSize.width ? windowSize.width : 1000}
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [72, -17, 0],
          scale: 1700
        }}
        onClick={handleOnClick}
      >
        {/* <CustomZoomableGroup
          zoom={localPosition.zoom}
          center={localPosition.coordinates}
          positionLocal={localPosition}
          onMoveEnd={handleMoveEnd}
        > */}
        <Graticule stroke="#ccc" step={[27, 9]} />
        <Geographies geography={geoUrl} style={{ cursor: 'pointer' }}>
          {({ geographies }) =>
            geographies
              .filter((d) => d.properties.SUBREGION === 'Caribbean')
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
                    stroke="#333"
                    strokeWidth="0.4"
                  />
                )
              })
          }
        </Geographies>
        {/* </CustomZoomableGroup> */}
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
}

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
  const { mapRef, transformString, position } = useZoomPan(restProps)
  // let check = false

  if (
    position.dragging?.type === 'wheel' ||
    position.dragging?.type === 'dblclick'
  ) {
    return (
      <g ref={mapRef}>
        <g
        // transform={`translate(${positionLocal.coordinates[0]} ${
        //   check ? positionLocal.coordinates[1] : ''
        // }  ) scale(${positionLocal.zoom})`}
        >
          {children}
        </g>
      </g>
    )
  }

  return (
    <g ref={mapRef}>
      <g
        // transform={`translate(${position.x} ${
        //   check ? position.y : ''
        // }  ) scale(${positionLocal.zoom})`}
        transform={transformString}
      >
        {children}
      </g>
    </g>
  )
}
