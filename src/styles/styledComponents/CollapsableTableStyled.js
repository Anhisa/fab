import styled from 'styled-components';

export const CollapsableTableStyled = styled.div`
  gap: 10px;
  margin-top: 10px;

  .open {
    display: flex;
    /* flex-direction: ${(props) => (props.usuario ? 'row' : 'column')}; */
    flex-direction: row;
    width: 100%;
    .column {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }
  .closed {
    display: none;
  }
  /* @media (min-width: 1440px) {
    .open {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 20px;
    }
  } */
`;
