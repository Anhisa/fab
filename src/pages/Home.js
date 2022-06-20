import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
// import '../styles/App.css'
import { Map } from '../components/Map'
import { CountryList } from '../containers/CountryList'
import { ComparativeTool } from '../containers/ComparativeTool'
import { MapStyled } from '../styles/styledComponents/MapStyled'
import { MapIslands } from '../components/MapIslands'
import { DetachableTable } from '../styles/styledComponents/detachableTable'
import SelectorComparative from '../containers/SelectorComparative'
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
import { ComponentContainer } from '../containers/ComponerContainer'
import UpArrow from '../components/UpArrow'
import OptionsSearch from '../containers/OptionsSearch'
import { DataContext } from '../context/dataContext'
import { Layout } from '../containers/Layout'

// import userQueries from './queries.php';
Home.propTypes = {
  themeToggler: PropTypes.func.isRequired
}

export function Home ({ themeToggler }) {
  const { officialAccounts } = useContext(DataContext)
  const [zoom, setZoom] = useState(false)
  const [countriesAllData, setCountriesAllData] = useState([])
  const [countrySelectedId, setCountrySelectedId] = useState(null)
  const countryDataState = [countriesAllData, setCountriesAllData]
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

        {showMap && <ColorBar />}

        {showMap && (
          <SectionMapsStyled>
            {showMap
              ? (
                  currentMap
                    ? (
                <MapStyled className="map-container col-6">
                  <Map
                    items={officialAccounts}
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
                    items={officialAccounts}
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
                      )
                )
              : null}
            {showMap && (
              <DetachableTable top={mousePosition.y} left={mousePosition.x}>
                <CountryList
                  accountsCountry={accountsCountry}
                  countryListManagmentOpen={countryListManagmentOpen}
                  countryDataState={countryDataState}
                  countrySelectedId={countrySelectedId}
                />
              </DetachableTable>
            )}
          </SectionMapsStyled>
        )}
        {!showMap && (
          <SectionToolsStyled>
            {showAccountComparing && (
              <ComparativeTool setDataComparing={setDataComparing} />
            )}
            {showPeriodComparing && (
              <>
                <SelectorComparative
                  countryDataState={countryDataState}
                  setDataComparing={setDataComparing}
                />
              </>
            )}
          </SectionToolsStyled>
        )}
        {showMap
          ? null
          : (
          <ComparisonContainerStyled>
            <OptionsSearch
              setDataComparing={setDataComparing}
              context={dataComparing}
              dataComparing={dataComparing}
            />
            <ComponentContainer context={dataComparing} usuario={false} />
            <UpArrow />
          </ComparisonContainerStyled>
            )}
      </Layout>
    </>
  )
}
