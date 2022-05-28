import '../styles/App.css';
import { Map } from '../components/Map';
import { Layout } from '../containers/Layout';
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
import ComparativePerPeriod from '../components/ComparativePerPeriod';
import SelectorComparative from '../containers/SelectorComparative';
import { SectionToolsStyled } from '../styles/styledComponents/SectionToolsStyled';
import { SectionMapsStyled } from '../styles/styledComponents/SectionMapStyled';
import { ComparisonContainerStyled } from '../styles/styledComponents/ComparisonContainerStyled';
import useCreateInitialState from '../hooks/createInitialState';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/official-accounts';
// import userQueries from './queries.php';

export const Home = () => {
  const response = useGetData(api);
  const [countriesAllData, setCountriesAllData] = useState([]);
  const [countrySelectedId, setCountrySelectedId] = useState(null);
  const countryDataState = [countriesAllData, setCountriesAllData];
  const [open, setOpen] = useState(false);

  const countryListManagment = { open, setOpen };
  const items = response.data;

  const [accountsCountry, setAccountsCountry] = useState([]);
  const [dataComparing, setDataComparing] = useCreateInitialState();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {}, [dataComparing]);

  return (
    <HomeStyled className="container-xl">
      <div className="banner-container">
        <h2 className="banner-title">CHINA LATAM TWITTER DATABASE</h2>
      </div>
      <TableContext.Provider value={dataComparing}>
        <SectionMapsStyled>
          <MapStyled className="map-container col-6">
            <Map
              items={items}
              setAccounts={setAccountsCountry}
              setMouse={setMousePosition}
              countryListManagment={countryListManagment}
              setCountrySelectedId={setCountrySelectedId}
            />
          </MapStyled>
          <MapStyled className="map-container col-6">
            <MapIslands
              items={items}
              setAccounts={setAccountsCountry}
              setMouse={setMousePosition}
              countryListManagment={countryListManagment}
              setCountrySelectedId={setCountrySelectedId}
            />
          </MapStyled>
          <DetachableTable top={mousePosition.y} left={mousePosition.x}>
            <CountryList
              accountsCountry={accountsCountry}
              countryListManagment={countryListManagment}
              countryDataState={countryDataState}
              countrySelectedId={countrySelectedId}
            />
          </DetachableTable>
        </SectionMapsStyled>
        <SectionToolsStyled>
          <ComparativeStyled>
            <ComparativeTool setDataComparing={setDataComparing} />
          </ComparativeStyled>
          <ComparativeStyled>
            <SelectorComparative
              countryDataState={countryDataState}
              setDataComparing={setDataComparing}
            />
          </ComparativeStyled>
        </SectionToolsStyled>
        <ComparisonContainerStyled>
          <ComponentContainer context={dataComparing} />
        </ComparisonContainerStyled>
      </TableContext.Provider>
    </HomeStyled>
  );
};
