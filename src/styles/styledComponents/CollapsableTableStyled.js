import styled from 'styled-components'

export const CollapsableTableStyled = styled.section`
.open {
    gap: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: ${(props) => (props.usuario ? 'column' : 'row')} !important;
    width: 100%;
    .column {
      width: 50%;
      display: flex;
      flex-direction: ${(props) => (props.usuario ? 'row' : 'column')};
    }
    .ht{
      width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  @media (max-width: 1150px) {
    .open {
      display: flex;
      flex-direction: column !important;
      width: 100%;
      margin-top: 20px;
      .column{
        width: 100%;
      }
     
    }
 
  }
  @media (max-width: 768px) {
  }
`
