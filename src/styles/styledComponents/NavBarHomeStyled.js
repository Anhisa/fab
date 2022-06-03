import styled from 'styled-components';

export const NavBarHomeStyled = styled.nav`
 width: 100vw;
 background-color: ${({ theme }) => theme.primary};
  height: 80px;
 color: white;
 display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .menu{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 60%;
    height: 100%;
    align-items: center;
    .menu-item{
      margin-left: 20px;
      height: 100%;
      border-bottom: 6px solid transparent;
      margin-right: 50px;
      cursor: pointer;
      &:hover{
        color: ${({ theme }) => theme.secondary};
        border-bottom: 6px solid ${({ theme }) => theme.secondary};
      }
      p{
        display: flex;
        align-items: center;
        height: 100%;
        font-size: 1.3rem;
        margin-bottom: 0;
        font-weight: 500;
        
      }


    }


  }
  
  .title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 40px;
    width: 25%;
    h3 {
      font-size: 1.5rem;
      margin: 7px 12px;
    }
  }
  @media (max-width: 968px) {
    display: flex;
    justify-content: center;
    .menu{
      display: none;
    }
    
    .title {
      width: 100%;
      justify-content: center;
    }
  }
`;
