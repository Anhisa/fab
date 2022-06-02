import styled from 'styled-components';

export const FloatingButtonStyled = styled.div`
  padding: 10px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }  
  

  #menuName {
    font-weight: 900;
    margin-bottom: 0px;
  }
`;
export const FloatingButtonInner = styled.button`
  background: #fafafa;
  border: 1px solid #e6e6e6; 
  width: 90%;
  font-size: 0.8rem;
  
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;

  &:hover {   
    border: 1px solid #e6e6e6;
    background-color: honeydew;
  }
`
export const FloatingButtonContainer = styled.div`
  z-index: 20;
  color:${({ theme }) => theme.textContrast};
  caret-color: transparent;
  animation: fadeIn 0.5s ease-in-out;
  animation-fill-mode: forwards;
  
  .rest {
    border-top-right-radius: 25px;
    position: absolute;
    bottom: 150px;
    left: 0px;
    background-color: ${({ theme }) => theme.primary};
    border-bottom-right-radius: 25px;
  }
  .sticky {
    position: fixed;

    top: 240px;
    left: 0px;
    width: 50px;
    background-color: ${({ theme }) => theme.primary};
    z-index: 10;
  }
  .hide {
    padding: 10px;
    width: 50px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 20px;
    transition: all 0.5s ease-in-out;
    #content {
      display: none;
    }
    left: 0;
    &:hover {
      //animate

     min-height: 350px;
     height: 500px;
      width: 300px;
      border: 1px solid ${({ theme }) => theme.textContrast};
      #content {
        display: flex;
        transition: all 0.5s ease-in-out;
      }
      transition: all 0.5s ease-in-out;
    }
  }
`;
