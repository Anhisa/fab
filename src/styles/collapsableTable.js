import styled from 'styled-components';

export const CollapsableTableStyled = styled.div`
  #table {
    flex-direction: row;
  }
  gap: 10px;
  margin-top: 10px;
  border: 1px solid black;

  .open {
    display: flex;
  }
  .closed {
    display: none;
  }
`;
