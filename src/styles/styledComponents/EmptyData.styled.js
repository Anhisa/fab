import styled from 'styled-components'

export const EmptyDataStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  border : 1px solid ${({ theme }) => theme.toggleBorder};
    font-size: 2rem;
    margin-bottom: 0;
    font-weight: 500;
    text-align: start;
    color : ${({ theme }) => theme.text};
  

`
