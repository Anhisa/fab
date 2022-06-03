import styled from 'styled-components';
export const ExpandedStyled = styled.div`
padding:15px;
background-color:${({ theme }) => theme.primary};
border: 2px solid ${({ theme }) => theme.toggleBorder};
h3{
  font-size: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.textContrast};
}
span{
  color: ${({ theme }) => theme.textContrast};
  
}

`