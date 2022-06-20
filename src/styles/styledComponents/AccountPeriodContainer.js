import styled from 'styled-components'

export const AccountPeriodContainer = styled.section`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  justify-content: center;
  
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.toggleBorder};
  border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};;  
  padding: 20px;
  .MuiBox-root {
    width: 80%;    
    span{
      color: ${({ theme }) => theme.text};
    }
  }
  .MuiSlider-thumb{
    background-color: ${({ theme }) => theme.secondary};
  }
  .MuiSlider-marked{
    color: ${({ theme }) => theme.text};
  }
`
