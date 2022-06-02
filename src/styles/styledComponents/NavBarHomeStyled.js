import styled from 'styled-components';

export const NavBarHomeStyled = styled.nav`
 width: 100vw;
 background-color: ${({ theme }) => theme.primary};
 height:150px;
 padding: 20px;
 color: white;
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    font-size: 0.9rem;
    text-align: center;

  }
 
`
