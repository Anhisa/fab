import React, { useState, Suspense, lazy } from 'react'
import PropTypes from 'prop-types'
import '../styles/App.css'

import { MapStyled } from '../styles/styledComponents/MapStyled'
import { SectionToolsStyled } from '../styles/styledComponents/SectionToolsStyled'
import { SectionMapsStyled } from '../styles/styledComponents/SectionMapStyled'
import { ComparisonContainerStyled } from '../styles/styledComponents/ComparisonContainerStyled'
import useCreateInitialState from '../hooks/createInitialState'
import FloatingTextRight from '../components/FloatingTextRight'
import useMenu from '../hooks/useMenu'
import ColorBar from '../components/colorBar'
import NavBarHome from '../components/NavBarHome'
import { GoblalStyles } from '../styles/styledComponents/GlobalStyles'
import FloatingText from '../components/FloatingText'
import UpArrow from '../components/UpArrow'
import Layout from '../containers/Layout'

const Map = lazy(() => import('../components/Map'))
const MapIslands = lazy(() => import('../components/MapIslands'))
const ComponentContainer = lazy(() => import('../containers/ComponerContainer'))
const ComparativeTool = lazy(() => import('../containers/ComparativeTool'))
const SelectorComparative = lazy(() => import('../containers/SelectorComparative'))
const DetachableTable = lazy(() => import('../styles/styledComponents/detachableTable'))
const CountryList = lazy(() => import('../containers/CountryList'))
const OptionsSearch = lazy(() => import('../containers/OptionsSearch'))
// import userQueries from './queries.php';
Home.propTypes = {
  themeToggler: PropTypes.func.isRequired
}

export function Home ({ themeToggler }) {
  const [zoom, setZoom] = useState(false)
  const [countrySelectedId, setCountrySelectedId] = useState(null)
  const [currentMap, setCurrentMap] = useState(true)
  const [open, setOpen] = useState(false)

  const countryListManagmentOpen = { open, setOpen }

  const [accountsCountry, setAccountsCountry] = useState([])
  const [dataComparing, setDataComparing] = useCreateInitialState()
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })
  const menu = useMenu()
  const { showMap, showAccountComparing, showPeriodComparing } = menu

  return (
    <>
      <GoblalStyles />
      <Layout>
        <NavBarHome
          menu={menu}
          countryListManagmentOpen={countryListManagmentOpen}
          themeToggler={themeToggler}
        />
        {showMap && (
          <>
            <ColorBar />
            <SectionMapsStyled>
              {currentMap
                ? (
                <MapStyled className="map-container col-6">
                  <Suspense fallback={<></>}>
                  <Map
                    setAccounts={setAccountsCountry}
                    setMouse={setMousePosition}
                    countryListManagmentOpen={countryListManagmentOpen}
                    setCountrySelectedId={setCountrySelectedId}
                    setZoom={setZoom}
                  />
                  </Suspense>
                  <FloatingText setCurrentMap={setCurrentMap} zoom={zoom} />
                  {!zoom && (
                    <>
                      <FloatingTextRight currentMap={currentMap} />
                    </>
                  )}
                </MapStyled>
                  )
                : (
                <MapStyled className="map-container col-6">
                  <Suspense fallback={<></>}>
                  <MapIslands
                    setAccounts={setAccountsCountry}
                    setMouse={setMousePosition}
                    countryListManagmentOpen={countryListManagmentOpen}
                    setCountrySelectedId={setCountrySelectedId}
                    setZoom={setZoom}
                  />
                  </Suspense>

                  <FloatingText
                    setCurrentMap={setCurrentMap}
                    islands={true}
                    zoom={zoom}
                  />
                  {!zoom && (
                    <>
                      <FloatingTextRight currentMap={currentMap} />
                    </>
                  )}
                </MapStyled>
                  )}
              <Suspense fallback={<></>}>
              <DetachableTable top={mousePosition.y} left={mousePosition.x}>
              <Suspense fallback={<></>}>
                <CountryList
                  accountsCountry={accountsCountry}
                  countryListManagmentOpen={countryListManagmentOpen}
                  countrySelectedId={countrySelectedId}
                />
              </Suspense>
              </DetachableTable>
              </Suspense>
            </SectionMapsStyled>
          </>
        )}
        {!showMap && (
          <SectionToolsStyled>
            {showAccountComparing && (
              <Suspense fallback={() => <div>Loading</div>}>
              <ComparativeTool setDataComparing={setDataComparing} />
              </Suspense>
            )}
            {showPeriodComparing && (
              <Suspense fallback={() => <div>Loading</div>}>
              <SelectorComparative setDataComparing={setDataComparing} />
              </Suspense>
            )}
          </SectionToolsStyled>
        )}
        {showMap
          ? null
          : (
          <ComparisonContainerStyled>
            <Suspense fallback={<></>}>
            <OptionsSearch
              setDataComparing={setDataComparing}
              context={dataComparing}
              dataComparing={dataComparing}
            />
            </Suspense>
            <Suspense fallback={() => <div>Loading</div>}>
            <ComponentContainer context={dataComparing} usuario={false} />
            </Suspense>
            <UpArrow />
          </ComparisonContainerStyled>
            )}
      </Layout>
    </>
  )
}
