import styled from "@emotion/styled"
export const ComparativeStyled = styled.section`
  display: flex;
  width: 50%;
  flex-direction: column;
  background-color: #a4c2d5;
  padding: 20px;
  margin: 20px;
  border-radius: 15px;
  height: fit-content;
  
  .countSelector{
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    margin-bottom: 20px;

  }
  .btnGroup{
    display: flex;
    flex-direction: column;    
    align-items: center;
    margin-bottom: 20px;
    align-items: flex-start;
    .row{
      display: flex;
      flex-direction: row;
    }    
  }
  .btnContainer{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    

    .btn {
      background-color: #ffce21;
      color:#121f42;
      width: fit-content;
      margin: 5px;
      display: flex;
      align-items: center;
      border-radius: 20px;
      padding: 5px 10px;
      border: 1px solid white;
      font-weight: 600;
      font-size: 1rem;
     
    }
  }
  .form{
    background-color: white;
    &:checked{
      background-color: white;

    }
  }
  @media (max-width: 968px) {
    padding: 10px;
    margin: 10px;
    width: 80%;
    align-items: center;

  }
`

export const ComparativePeriodStyled = styled.section`
  display: flex;
  flex-direction:column;
  background-color: #a4c2d5;
  padding: 20px;
  width: 100%;
  margin-top: 20px;
  border-radius: 15px;
  height: fit-content;
  
  .countSelector{
    display: flex;
    flex-direction: column;
width: 100%;
    align-items: flex-start;
    margin-bottom: 20px;

  }
  .btnGroup{
    display: flex;
    flex-direction: column;    
    align-items: center;
    margin-bottom: 20px;
    align-items: flex-start;
    .row{
      display: flex;
      flex-direction: row;
    }    
  }
  .btnContainer{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    

    .btn {
      background-color: #ffce21;
      color:#121f42;
      width: fit-content;
      margin: 5px;
      display: flex;
      align-items: center;
      border-radius: 20px;
      padding: 5px 10px;
      border: 1px solid white;
      font-weight: 600;
      font-size: 1rem;
     
    }
  }
  .selectors{
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;


  .form{
    background-color: white;
    width: 50%;
    text-overflow: ellipsis;
    &:checked{
      background-color: white;

    }
  }
}
`