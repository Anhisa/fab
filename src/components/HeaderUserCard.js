import React, { useEffect, useState } from 'react';
import { useGetData } from '../hooks/useGetData';
import { HeaderUserView } from '../styles/styledComponents/userCardStyled';
const apiCountries =
  'https://fundacionandresbello.org/wp-json/fab/v1/countries';
const apiFlags = `https://countryflagsapi.com/png/`;
const HeaderUserCard = ({ countryId, userName }) => {

  const [data, setData] = useState({
    countryName: '',
    flagUrl: '',
    loading: true,
  });

  const dataCountries = useGetData(apiCountries);
  let countryName = '';
  let flagUrl = '';
  let countryNameEng = '';

  useEffect(() => {
    if (!dataCountries.loading) {
      countryName = dataCountries.data.find(
        (country) => country.country_id === countryId
      );

      countryNameEng = countryName.country_name_eng;

      countryName = countryNameEng.split(' ').join('%20');
      flagUrl = `${apiFlags}${countryName}`;
      
      setData({
        countryName: countryNameEng,
        flagUrl: flagUrl,
      });
    }
  }, [dataCountries.loading,  countryId]);
  if (data.loading) {
    return <div>Loading...</div>;
  }

  return (
    <HeaderUserView>
      <img src={data.flagUrl} alt={`Bandera de ${data.countryName}`} />
      <div className="name">
        <h2 className='countryName'>{data.countryName}</h2>
        <h2 className='accountName'>{userName}</h2>
      </div>
    </HeaderUserView>
  );
};

export default HeaderUserCard;
