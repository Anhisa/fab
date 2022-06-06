import styled from 'styled-components';

export const PieContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;  
  
  @media (max-width: 1000px) {
    flex-direction: column;
    
  }
`

export const PieChartContainer = styled.div`
  display: flex;
  width:${props => props.usuario ? '100%' : '50%'};
  min-width: 550px;
  color: ${({ theme }) => theme.textContrast};
  background-color: ${({ theme }) => theme.background};
  h4{
    font-weight: 700;
    margin-bottom: 10px;
    text-align: center;
  }
    flex-direction: column;
    min-height: 450px;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 100%;
    
  }
`