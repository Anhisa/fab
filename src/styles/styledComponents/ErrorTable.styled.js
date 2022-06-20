import styled from 'styled-components'

export const ErrorTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 60px;
  background-color: #ed2939;
  p{
    color: white;
    font-size: 1.5rem;
    padding: 0px;
    margin: 0px;

  }

`
export const ErrorContainer = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  
  //last child
  div:last-child{
    border-bottom-left-radius: 17px;
    border-bottom-right-radius: 17px;
  }
`
