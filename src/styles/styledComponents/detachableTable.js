import styled from 'styled-components';

export const DetachableTable = styled.section`
  position: absolute;

  top: ${(props) => props.top + 'px'};
  left: ${(props) => props.left + 'px'};
  max-width: fit-content;
  z-index: 10;
  background: white;
  border-radius: 5px;
  .closed {
    display: none;
  }
  .open{
    display: flex;
    border: 2px solid black;
  }
  .rdt_TableRow{
    &:hover{
      background-color: #ffce21;
    }
  }
`;
