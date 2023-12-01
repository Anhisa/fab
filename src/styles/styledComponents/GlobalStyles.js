import { createGlobalStyle } from 'styled-components'

export const GoblalStyles = createGlobalStyle`
  #root {
    /* margin-top: 75px; */
    width: 100%;
    max-width: 100%;
    line-height: 1.5;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 0.50s linear;
    caret-color: transparent;
 }
 *{
  font-family: 'Montserrat', sans-serif !important;
 }
`
