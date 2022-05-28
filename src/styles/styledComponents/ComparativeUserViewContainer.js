import styled from 'styled-components';

export const ComparativeUserViewContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 100%;
  #most-ht{      
      flex-direction: column; 
    }
    #left{
      width: 100%;

    } 
    #right{
      width: 100%;
    }

  @media (min-width: 1440px) {
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    #left{
      width: 100%;

    } 
    #right{
      width: 100%;
    }
                                
    justify-content: center;
    align-items: stretch;
    ;
    #most-ht{      
      flex-direction: column; 
    }
   .table{
    width:90%;
    align-items: center;
    display:flex;    
    height: fit-content;
    flex-direction: column;
    justify-content: center;
  
    button{
      width: 90%;
      display:flex;
      justify-content: center;
    }
  
     .column {
       width: 100%;
     }
   }
 
  }
 
  `

