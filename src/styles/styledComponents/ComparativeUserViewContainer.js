import styled from 'styled-components';

export const ComparativeUserViewContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
  @media (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
   
    section .open .closed{
      width: 50%;
    }
    .column {
      width: 100%;
    }
  }
`
