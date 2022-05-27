import styled from 'styled-components'

export const ViewUserCardStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding:10px;
  height: 300px;
  font-size: 1rem;
  border-radius: 20px;
  border: 1px solid #e0e0e0;  
  padding: 15px;
  .innerLeft{
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: flex-start;
    margin-right: 20px;
  }
  .innerRight{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    margin: 0;
  }
  hr{
    width: 100%;
    margin:0;    
    border-top: 1.2px dashed black;

  }
`

export const UserCardStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;  
  padding: 5px;  
  height: 90px;

  .firstGroup{
    display: flex;
    flex-direction: row; 
    width:100%;
  .dot{
    width: 10px;
    height: 10px;
    margin-top: 6px;
    margin-right: 5px;
    border-radius: 50%;
    background-color:#ffce21;
  }
  .title {
    p {
      margin-bottom: 0;      
    }
  }
  .innerGroup{
    width: 100%;
    .account{
      display: flex;
      width: 100%;
      flex-direction: row;
     
      p{
        font-size: 1.2rem;
        margin-top: 0;
        margin-bottom: 0;
        font-weight: bold;
       
      }
    }
    .data{
      display: flex;
      width: 100%;
      flex-direction: row;      
     
      p{
        font-size: 1rem;
        margin-top: 0;
        margin-bottom: 0;
        font-weight: bold;
        color:#1e5fae;
      }
    }
    .verified{         
      height:30px ;
      margin: 0;
      padding: 0;
      margin-left:30px ;

      svg{
        width: 100%;
        height: 100%;
      }
    }


  }
}

`