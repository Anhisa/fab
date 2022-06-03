import styled from 'styled-components';

export const AccountDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;  
  justify-content: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.body};
  color : ${({ theme }) => theme.text};
  .tableContainer{
 
    @media (min-width: 1440px) {
      flex-direction: row;
    flex-wrap: wrap;
     
                                
    justify-content: center;
    align-items: stretch;
    ;
   .table{
    width: 50%;    
    display:flex;
    position: relative;
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
   
  }
    }
  

`
