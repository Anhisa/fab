import styled from 'styled-components';

export const CollapsableTableStyled = styled.div`

.open {
    gap: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: ${(props) => (props.usuario ? 'row' : 'column')};
    flex-direction: row;
    width: 100%;
    .column {
      width: 90%;
      margin-left: 10px;
      display: flex;
      flex-direction: ${(props) => (props.usuario ? 'row' : 'column')};
    }
    
  }
  .ht.open{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .ht.closed{
    display: none;
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
  @media (max-width: 968px) {
    .open {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 20px;
     
    }
 
  }
`;
