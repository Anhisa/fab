import styled from 'styled-components'
export const NavBarStyled = styled.nav`
  
  background-color: ${({ theme }) => theme.primary};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  // background-color: #f5f5f5;
  // border-bottom: 1px solid #e5e5e5;
  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  // z-index: 1;
  height: 80px;
  // box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

  // navbarheader
  .navbar-header {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .backArrow{
    padding: 20px;
  }
  .menu-item {
      margin-left: 20px;
      height: 100%;
      border-bottom: 6px solid transparent;
      margin-right: 50px;
      cursor: pointer;
      color: ${({ theme }) => theme.textContrast};
      &:hover {
        border-bottom: 6px solid ${({ theme }) => theme.textContrast};
        color: ${({ theme }) => theme.textContrast};
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
`
