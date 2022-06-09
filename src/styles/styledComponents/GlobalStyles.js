import { createGlobalStyle } from "styled-components";

export const GoblalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;            
    line-height: 1.5;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 0.50s linear; 
 }
 *{
  font-family: 'Montserrat', sans-serif !important;

 }
`