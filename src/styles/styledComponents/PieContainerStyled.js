import styled from 'styled-components';

export const PieContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;  
  

`

export const PieChartContainer = styled.div`
  border: 1px solid black;
  display: flex;
  width: ${props => props.usuario === true ? '100%' : '50%'};
  max-width: 500px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`