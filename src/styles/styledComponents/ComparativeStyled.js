import styled from 'styled-components';
import DataTable from 'react-data-table-component';

export const ComparativeStyled = styled.section`
  display: flex;
  width: 50%;  
  height: 700px;
  flex-direction: column;
  background-color:${({ theme }) => theme.background};
  margin: 20px;
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.75);
  
  .countSelector {
    padding: 20px;
    display: flex;
    flex-direction: column;
    z-index: 1;
    align-items: flex-start;
    
    position: relative;
    .title{
      h4{
      font-size: 20px;
      font-weight: bold;
      }
    }
    .form{
      z-index: 2;
    
    }
  }
  .countSelector2{
    padding: 20px;
    display: flex;
    flex-direction: column;
    z-index: 1;    
    
    position: relative;
    .title{
      h4{
      font-size: 20px;
      font-weight: bold;
      }
    }
    .form{
      z-index: 2;
    }
  }
  .btnGroup {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    align-items: flex-start;
    padding-left:20px;
    padding-right:20px;
    .row {
      display: flex;
      flex-direction: row;
    }
  }
  .btnContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
   
    

    .btn {
     
      width: 90%;
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.textContrast};
    
      margin: 5px;
      display: flex;
      justify-content: center;
      border-radius:10px;
      padding: 5px 10px;
      border: 1px solid ${({ theme }) => theme.toggleBorder};
      font-weight: 600;
      font-size: 1rem;
    }
  }
  .form {
    background-color: white;
    &:checked {
      background-color: white;
    }
  }
  @media (max-width: 968px) {
    padding: 10px;
    margin: 10px;
    width: 70%;
    background: ${({ theme }) => theme.background};
    align-items: center;
    .countSelector{
      margin-bottom: 0px;
      width: 100%;
      z-index: 1;
    }
  }
`;

export const ComparativePeriodStyled = styled.section`
  display: flex;
  flex-direction: column;
  /* background-color: #a4c2d5; */
  background-color: ${({ theme }) => theme.primary};
  padding: 10px;

  min-width: 500px;
  width: 100%;
  z-index: 1;
  border-radius: 15px;

  .countSelector {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    margin-bottom: 20px;
    .title {
      background-color: ${({ theme }) => theme.secondary};
      width: 100%;
      display: flex;
      place-items: center;
    }
  }
  .btnGroup {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    align-items: flex-start;
    .row {
      display: flex;
      flex-direction: row;
    }
  }
  .btnContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .btn {
      background-color: ${({ theme }) => theme.secondary};
      color: ${({ theme }) => theme.text};
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
  .selectors {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;

    .form {
      background-color: white;
      width: 50%;
      text-overflow: ellipsis;
      &:checked {
        background-color: white;
      }
    }
  }
`;

export const DataTableStyled = styled(DataTable)`
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  .MuiTableCell-root {
    padding: 10px;
  }
`;
