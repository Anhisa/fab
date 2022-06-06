import '../styles/App.css';
import { Map } from '../components/Map';

import { CountryList } from '../containers/CountryDetails';
import { ComparativeTool } from '../containers/ComparativeTool';
import { useContext, useEffect, useState } from 'react';
import { MapStyled } from '../styles/styledComponents/MapStyled';
import { useGetData } from '../hooks/useGetData';
import { MapIslands } from '../components/MapIslands';
import { TableContext } from '../context/TableContext';

import { ComponentContainer } from '../hooks/ComponerContainer';
import { DetachableTable } from '../styles/styledComponents/detachableTable';
import { HomeStyled } from '../styles/styledComponents/HomeStyled';
import { ComparativeStyled } from '../styles/styledComponents/ComparativeStyled';

import SelectorComparative from '../containers/SelectorComparative';
import { SectionToolsStyled } from '../styles/styledComponents/SectionToolsStyled';
import { SectionMapsStyled } from '../styles/styledComponents/SectionMapStyled';
import { ComparisonContainerStyled } from '../styles/styledComponents/ComparisonContainerStyled';
import useCreateInitialState from '../hooks/createInitialState';

import FloatingTextRight from '../components/FloatingTextRight';
import useMenu from '../hooks/useMenu';
import ColorBar from '../components/colorBar';
import NavBarHome from '../components/NavBarHome';



import { GoblalStyles } from '../styles/styledComponents/GlobalStyles';

import FloatingText from '../components/FloatingText';

import lootieLoading from '../loader/107220-loading-circles.json'
import Lottie from 'lottie-react'
import { getActivityCreactionDate } from '../helpers/getActivityCreactionDate';
const api = 'https://fundacionandresbello.org/wp-json/fab/v1/official-accounts';
// import userQueries from './queries.php';

export const Home = ({ themeToggler}) => {
  const response = useGetData(api);
  const [loading, setLoading] = useState(true);
  const [countriesAllData, setCountriesAllData] = useState([]);
  const [countrySelectedId, setCountrySelectedId] = useState(null);
  const countryDataState = [countriesAllData, setCountriesAllData];
  const [currentMap, setCurrentMap] = useState(true);
 
  const [open, setOpen] = useState(false);

  const countryListManagmentOpen = { open, setOpen };
  const items = response.data;
  
  const [accountsCountry, setAccountsCountry] = useState([]);
  const [dataComparing, setDataComparing] = useCreateInitialState();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const menu = useMenu()
  const {
    showMap,
    showAccountComparing,
    showPeriodComparing,
  } = menu;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  },[])


 if(loading){
   return (
     <div  className="spinner" 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}

     >
    <Lottie animationData={lootieLoading} loop={true} 
      label="loading"
    
    />
    <span className="visually-hidden">Loading...</span>
  
  </div>
   )
 }
  // let answer = getActivityCreactionDate()
  // console.log('answer', answer)

  return (
<>
    <GoblalStyles />
    <HomeStyled className="container-xl">
      {/* <FloatingButton setCurrentMap={setCurrentMap} menu={menu} currentMap={currentMap}  themeToggler={themeToggler} countryListManagmentOpen={countryListManagmentOpen} /> */}
      <NavBarHome  menu={menu}
       countryListManagmentOpen={countryListManagmentOpen}
       themeToggler={themeToggler}
       />
   
      
      {showMap &&  <ColorBar/>}
      <TableContext.Provider value={dataComparing}>
        <SectionMapsStyled>
         { showMap ?
            currentMap  ? <MapStyled className="map-container col-6">
            <Map
              items={items}
              setAccounts={setAccountsCountry}
              setMouse={setMousePosition}
              countryListManagmentOpen={countryListManagmentOpen}
              setCountrySelectedId={setCountrySelectedId}
            
            />
             <FloatingText setCurrentMap={setCurrentMap}/>
             <FloatingTextRight currentMap={currentMap}/>
          </MapStyled>
          :
          <MapStyled className="map-container col-6">
            <MapIslands
              items={items}
              setAccounts={setAccountsCountry}
              setMouse={setMousePosition}
              countryListManagmentOpen={countryListManagmentOpen}
              setCountrySelectedId={setCountrySelectedId}
            />
          <FloatingText setCurrentMap={setCurrentMap} islands={true}/>
          <FloatingTextRight currentMap={currentMap}/>
          </MapStyled>
          : null
          }
          <DetachableTable top={mousePosition.y} left={mousePosition.x}>
            <CountryList
              accountsCountry={accountsCountry}
              countryListManagmentOpen={countryListManagmentOpen}
              countryDataState={countryDataState}
              countrySelectedId={countrySelectedId}
            />
          </DetachableTable>
        </SectionMapsStyled>
        <SectionToolsStyled>
          {showAccountComparing ? <ComparativeStyled>
            <ComparativeTool setDataComparing={setDataComparing} />
          </ComparativeStyled>
          : null}
        {showPeriodComparing ?  <ComparativeStyled>
            <SelectorComparative
              countryDataState={countryDataState}
              setDataComparing={setDataComparing}
            />
          </ComparativeStyled>
          : null}
        </SectionToolsStyled>
        {showMap ? null : 
        <ComparisonContainerStyled>
          <ComponentContainer context={dataComparing} />
        </ComparisonContainerStyled>}
      </TableContext.Provider>
    </HomeStyled>
    </>
  );
};
