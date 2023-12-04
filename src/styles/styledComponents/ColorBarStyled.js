import styled from 'styled-components'

export const ColorBarStyled = styled.div`
  background: linear-gradient(90deg, #edf7ff 0%, #1d9bf0 100%);
  max-width: 450px;
  min-width: 150px; 
  height: 30px;
  pointer-events: none;
  border-radius: 20px;
  margin: 0 10px 0 10px;
  @media (max-width: 480px) {
    max-width: 250px;
    margin: 0 3px 0 3px;
  }
`

export const ColorBarContainer = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  max-width: 550px;
  min-width: 100px;
  position: absolute;
  bottom: 20px;
  right: 14px;
  em{
    font-size: 0.9rem;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    left: -1px;
    right: auto;
    scale: 0.94;
    bottom: 10px;
  }  
  @media (max-width: 480px) {
    left: -30px;
    scale: 0.75;
    bottom: 130px;
  }
`
