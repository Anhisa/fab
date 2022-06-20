import styled from 'styled-components'
export const ExpandedStyled = styled.div`
padding:15px;
background-color:${({ theme }) => theme.primary};
border: 2px solid ${({ theme }) => theme.toggleBorder};
/* border-bottom-right-radius: 35px;
border-bottom-left-radius: 35px; */
h3{
  font-size: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.textContrast};
}
span{
  color: ${({ theme }) => theme.textContrast};  
}

`
