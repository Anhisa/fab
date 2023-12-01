import styled from 'styled-components'

export const ModalStyled = styled.div`
  position: absolute;
 bottom: 0;
  left: 0;
  width: 500px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;  
  justify-content: center;
  align-items: center;
  .is-active {
    display: flex;
  }
 

`
