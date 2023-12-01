import React, { useState } from 'react'
import '../styles/App.css'

import { MapStyled } from '../styles/styledComponents/MapStyled'
import { SectionToolsStyled } from '../styles/styledComponents/SectionToolsStyled'
import { SectionMapsStyled } from '../styles/styledComponents/SectionMapStyled'
import { ComparisonContainerStyled } from '../styles/styledComponents/ComparisonContainerStyled'
// import useCreateInitialState from '../hooks/createInitialState'
import FloatingTextRight from '../components/FloatingTextRight'
import useMenu from '../hooks/useMenu'
import ColorBar from '../components/colorBar'
import NavBarHome from '../components/NavBarHome'
import { GoblalStyles } from '../styles/styledComponents/GlobalStyles'
import FloatingText from '../components/FloatingText'
import UpArrow from '../components/UpArrow'
import Layout from '../containers/Layout'
import useOpenList from '../hooks/useOpenList'
import DetachableTable from '../styles/styledComponents/detachableTable'

import Map from '../components/Map'
import MapIslands from '../components/MapIslands'
import ComponentContainer from '../containers/ComponerContainer'
import ComparativeTool from '../containers/ComparativeTool'
import SelectorComparative from '../containers/SelectorComparative'
import CountryList from '../containers/CountryList'
import OptionsSearch from '../containers/OptionsSearch'
import OptionsAndTables from '../containers/OptionsAndTables'

// import userQueries from './queries.php';
export default function Home () {
  const [zoom, setZoom] = useState(false)
  const [countrySelectedId, setCountrySelectedId] = useState(null)
  const [currentMap, setCurrentMap] = useState(true)
  const [open, setOpen] = useOpenList()
  const countryListManagmentOpen = { open, setOpen }
  const [accountsCountry, setAccountsCountry] = useState([])
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
        <NavBarHome menu={menu} setOpen={setOpen} />
        {showMap && (
          <>
            <ColorBar />
            <SectionMapsStyled>
              {currentMap
                ? (
                <MapStyled className="map-container col-6">
                  <Map
                    setAccounts={setAccountsCountry}
                    setMouse={setMousePosition}
                    countryListManagmentOpen={countryListManagmentOpen}
                    setCountrySelectedId={setCountrySelectedId}
                    setZoom={setZoom}
                  />

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
                  <MapIslands
                    setAccounts={setAccountsCountry}
                    setMouse={setMousePosition}
                    countryListManagmentOpen={countryListManagmentOpen}
                    setCountrySelectedId={setCountrySelectedId}
                    setZoom={setZoom}
                  />

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

              <DetachableTable top={mousePosition.y} left={mousePosition.x}>
                <CountryList
                  accountsCountry={accountsCountry}
                  countryListManagmentOpen={countryListManagmentOpen}
                  countrySelectedId={countrySelectedId}
                />
              </DetachableTable>
            </SectionMapsStyled>
          </>
        )}
        {!showMap && (
          <SectionToolsStyled>
            {showAccountComparing && <ComparativeTool />}
            {showPeriodComparing && <SelectorComparative />}
          </SectionToolsStyled>
        )}
        {showMap
          ? null
          : (
          <ComparisonContainerStyled>
            <OptionsAndTables>
              <OptionsSearch />
              <ComponentContainer usuario={false} />
            </OptionsAndTables>
            <UpArrow />
          </ComparisonContainerStyled>
            )}
      </Layout>
    </>
  )
}
