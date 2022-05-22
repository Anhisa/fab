import styled from 'styled-components';
export const UserCardStyled = styled.div`
  display: flex;
  flex-direction: row;
  .left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    
  }
  .right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;    
    section{
      height: 100%;
      width: 100%;
      canvas{
        height: 100%;
        width: 100%;
  
      }
    }


  }
`;
export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const HeaderUserView = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
justify-content: flex-start;
  gap: 10px;
  margin: 0 auto;
  img{
    height: 80px;

  }
  .name {
    padding: 5px 50px 5px 5px;
    background-color: #121f45;
    border-radius: 0% 0% 22% 0% / 0% 0% 100% 0% ;
    .countryName {
      font-size: 1.2em;
      font-weight: bold;
      color: #a4c2d3;
    }
    .accountName {
      font-size: 1em;
      font-weight: bold;
      color: #ffce21;
    }
  
  }
  `