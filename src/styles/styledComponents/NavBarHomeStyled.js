import styled from 'styled-components'

export const NavBarHomeStyled = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  height: 80px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .hamburger {
    display: none;
    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      width: 30%;

      align-items: center;
      justify-content: center;
    }
  }
  .menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 60%;
    height: 100%;
    align-items: center;
    .menu-item {
      margin-left: 20px;
      height: 100%;
      border-bottom: 6px solid transparent;
      margin-right: 50px;
      cursor: pointer;
      &:hover {
        color: ${({ theme }) => theme.secondary};
        border-bottom: 6px solid ${({ theme }) => theme.secondary};
      }
      p {
        display: flex;
        align-items: center;
        height: 100%;
        font-size: 1rem;
        margin-top: 15px;
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
      color: ${({ theme }) => theme.textContrast};
    }
  }
  @media (max-width: 968px) {
    display: flex;
    justify-content: space-between;
    .menu {
      display: none;
    }
    .opened{
      position: absolute;
      top: 80px;
      left: 0;
      width: 100%;
      height: 90%;
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      z-index: 100;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .menu-item {
        margin-left: 20px;
        height: 100%;

        margin-right: 50px;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.secondary};
        }
        p {
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
      width: 100%;
      justify-content: center;
    }
  }
`

export const MenuButtonStyled = styled.button`
  // no styles
  border: 0;
  background: none;
  cursor: pointer;
  outline: none;
  color: ${({ theme }) => theme.textContrast};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textContrast};
    &:hover {
      color: ${({ theme }) => theme.secondary};
    }
  }
  &:focus {
    outline: red;
    
  }
`
