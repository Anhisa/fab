import styled from 'styled-components'

export const ColorBarStyled = styled.div`
  /* background: white; */
  background: linear-gradient(90deg, #edf7ff 0%, #1d9bf0 100%);
  /* opacity: 1; */
  /* border: 1px solid black; */
  max-width: 450px;
  
  min-width: 150px;
 
  
  height: 30px;

  pointer-events: none;
  border-radius: 20px;


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
  bottom: 50px;
  right: 100px;
  em{
    font-size: 1rem;
    font-weight: 600;
    margin: 15px;
  }
  @media (max-width: 768px) {
    width: 100px;
    right: 300px;
  }  
  @media (max-width: 480px) {
    width: 100px;
    right: 300px;
  }
`
