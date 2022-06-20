import styled from 'styled-components'

export const ComparativeUserViewContainerStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;

 .button {
    width: 100%;
    margin: 10px;
    
    
 }
  .table {
    width: 100%;
    .column {
      width: ${(props) => (props.usuario ? '100%' : '50%')};
      display: flex;
      flex-direction: row;
      .dataTable{
        width: 50%;        
      }
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;

    #left {
      width: 100%;
    }
    #right {
      width: 100%;
    }
  

    justify-content: center;
    align-items: stretch;
 
    .table {
      width: 100%;
      align-items: center;
      display: flex;
      height: fit-content;
      flex-direction: column;
      justify-content: center;

      button {
        width: 90%;
        display: flex;
        justify-content: center;
      }

      .column {
        width: 100%;
        display: flex;
        flex-direction: column;
        .dataTable{
          width: 100%;
        }
      }
    }
  }
`
