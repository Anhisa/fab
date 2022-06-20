import styled from 'styled-components'

export const PieContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  width: 100%;
  gap: 10px;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const PieChartContainer = styled.div`
  display: flex;
  width:${props => props.usuario ? '50%' : '100%'};
  padding: 0 !important;
  margin-top: 25px;
  margin-left: 5px;  
  background-color: ${({ theme }) => theme.background} !important;
  color: ${({ theme }) => theme.primary};
  border-radius: 35px;
  flex-direction: column;
  min-height: 450px;
  align-items: center;
  justify-content:space-between;
  border-bottom: 2px solid ${({ theme }) => theme.toggleBorder} !important;
  h4 {
    
    width: 100%;
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 1.2rem;    
    border-top-right-radius: 35px;
    border-top-left-radius: 35px;
    text-align: center;
    border-bottom: 1px solid white;
    background-color: ${({ theme }) => theme.secondary};
    margin:0;
  }
  canvas{
    border-left: 2px solid ${({ theme }) => theme.toggleBorder};
    border-right: 2px solid ${({ theme }) => theme.toggleBorder};
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    padding: 5px;
    height: 100%;
  }


  @media (max-width: 1000px) {
    width: 100%;
  }
`
