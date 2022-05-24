import styled from 'styled-components';

export const DetachableTable = styled.section`
  position: absolute;

  top: ${(props) => props.top + 'px'};
  left: ${(props) => props.left + 'px'};
  max-width: fit-content;
  z-index: 1;

  background: lightgrey;
  border-radius: 5px;
  .closed {
    display: none;
  }
  .open {
    display: flex;
  }
`;
