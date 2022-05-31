import styled from 'styled-components';

export const ColorBarStyled = styled.div`
  background: white;
  background: linear-gradient(90deg, rgb(255,255,255) 0%, rgb(0,212,255) 60%, rgb(29,155,240) 100%);  
  opacity: 1;
  border: 1px solid black;
  width: 250px;
  height: 50px;
  
  pointer-events: none;
  border-radius: 10px;


`;

export const ColorBarContainer = styled.div`
    /* background: rgb(255,255,255);
  background: linear-gradient(90deg, rgb(255,255,255) 0%, rgb(0,212,255) 60%, rgb(29,155,240) 100%);   */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  
 position: absolute;
  bottom: 50px;
  left: 50px;
  em{
    font-size: 1rem;
    font-weight: 600;
    margin: 15px;
  }
`