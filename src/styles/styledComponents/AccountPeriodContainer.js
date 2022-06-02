import styled from 'styled-components';

export const AccountPeriodContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  justify-content: center;
  
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.toggleBorder};
  border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};;  
  padding: 5px;
  .MuiBox-root {
    width: 80%;    
    span{
      color: ${({ theme }) => theme.text};
    }
  }
`