import React, { useEffect, useState, memo } from 'react';
import { useFilterData } from '../hooks/useFilterData';
import { Spinner } from 'react-bootstrap';
import { EmptyDataStyled } from '../styles/styledComponents/EmptyData.styled';
import { MonthlyTweetsChart } from '../components/monthyTweets/MonthlyTweetsChart';


const api = 'https://fundacionandresbello.org/wp-json/fab/v1/monthly-tweets';
export const MonthlyTweetsItems = ( {context}) => {

  const [ data, loading] = useFilterData(api, context, 'monthly-tweets');
  const [innerData, setInnerData] = useState(false);

  useEffect(() => {
    if (!loading && data.length > 0) {
      setInnerData(data);
    }
  }, [data]);

  if (!innerData) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (innerData.length === 0 || innerData.length === undefined) {
    return <EmptyDataStyled>No hay data correspondiente al periodo seleccionado</EmptyDataStyled>;
  }
 ;

  return (
    <section className="closed" id="monthy-tweets">
      <MonthlyTweetsChart newData={innerData} context={context}/>
    </section >
  );
};
