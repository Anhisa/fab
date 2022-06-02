import styled from 'styled-components';

export const NavBarHomeStyled = styled.nav`
 width: 100vw;
 background-color: ${({ theme }) => theme.primary};
 height:70px;
 padding: 20px;
 color: white;
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 0.8rem;
    text-align: center;
  }
  h3 {
    font-size: 1.5rem;
    margin: 7px 12px;
  }
`;
