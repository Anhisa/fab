import styled from 'styled-components';

export const PieContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;  
  

`

export const PieChartContainer = styled.div`
  display: flex;
  width:${props => props.usuario ? '100%' : '50%'}; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 100%;
    
  }
`