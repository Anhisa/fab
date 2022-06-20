import styled from 'styled-components'
export const UserCardStyled = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    height:100%;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 50%;    
    border-radius: 16px;
    padding: 10px;
    background-color: ${({ theme }) => theme.background};
    border:2px solid ${({ theme }) => theme.toggleBorder};
    section {
      height: 100%;
      width: 100%;
      /* background-color: lightgray; */
      /* canvas {
        height: 100%;
        width: 100%;
      } */
    }
  }
  @media (max-width: 968px) {
    flex-direction: column;
    padding: 10px;
    .left {
      width: 100%;
    }
    .right {
      width: 100%;
    }
  }
`
export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`

export const HeaderUserView = styled.header`
  display: flex;
  flex-direction: row;
  padding: 10px 25px;
  width: 100%;
  justify-content: flex-start;
  gap: 10px;

  img {
    height: 80px;
  }
  .name {
    padding: 10px 50px 10px 15px;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 0% 0% 22% 0% / 0% 0% 100% 0%;
    min-width: 450px;
    display: flex;
    flex-direction: column;
    .countryName {
      font-size: 1.4rem;
      font-weight: bold;
      color: ${({ theme }) => theme.background};
    }
    .accountName {
      font-size: 1.2rem;
      font-weight: bold;
      color: ${({ theme }) => theme.secondary};
    }
  }
`
