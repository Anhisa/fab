import styled from 'styled-components';

export const MapStyled = styled.div`
  cursor: grab;
  width: 100vw;
  .geo{
  //hover
  &:hover{

    fill: #ffce21;
  }
  }
  // add animation ease in 
 opacity: 0;
  animation: fadeIn 1s ease-in;
  animation-fill-mode: forwards;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  


`
