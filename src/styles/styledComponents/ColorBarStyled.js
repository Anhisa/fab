import styled from 'styled-components';

export const ColorBarStyled = styled.div`
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,212,255,1) 80%, rgba(29,155,240,1) 100%);
  border: 1px solid black;
  width: 400px;
  height: 50px;
  z-index: -1;
  pointer-events: none;

  border-radius: 10px;

`;

export const ColorBarContainer = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  
 position: absolute;
  bottom: 0px;
  left: 100px;
  em{
    font-size: 1rem;
    font-weight: 600;
    margin: 15px;
  }
`