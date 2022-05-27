import styled from 'styled-components';

export const ComparativeUserViewContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  @media (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
   .table{
    width: 50%;    
    display:flex;
    height: fit-content;
    flex-direction: column;
    justify-content: center;
    button{
      width: 90%;
      display:flex;
      justify-content: center;
    }
     section .closed{
        display: none;   
     }
     section .open{
        display: flex;
        flex-direction: column;
        width: 50%;
     }
     .column {
       width: 100%;
     }
   }
   .hashtags{
     height: fit-content;

   }
  }
`
