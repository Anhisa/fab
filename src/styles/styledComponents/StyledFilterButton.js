import styled from 'styled-components'
export const StyledFilterButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  box-shadow: 0px 3px 5px black;
  display: flex;  
  justify-content: flex-start;
  align-items: center;
  border: none;
  background-color : ${props => props.usuario ? '' : ({ theme }) => theme.primary} ;
  color: ${props => props.usuario ? 'black' : ({ theme }) => theme.textContrast} ;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.text};
  }
  &:active {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.text};
   
    transform: translateY(5px);
    box-shadow: 0px 0px 0px black;
  }
  .icon{
    // no click events
    pointer-events:none ;
    margin-right: 10px;
    margin-left: 10px;

  }

`
