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
    align-items: center;
  }  
  

  #menuName {
    font-weight: 500;
    margin-bottom: 0px;
  }
`;
export const FloatingButtonInner = styled.button`
  background: #fafafa;
  border: 1px solid #e6e6e6; 
  
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
  color: #fff;
  caret-color: transparent;
  animation: fadeIn 0.5s ease-in-out;
  animation-fill-mode: forwards;
  
  .rest {
    border-top-right-radius: 25px;
    position: absolute;
    bottom: 150px;
    left: 0px;
    background-color: rgb(29, 36, 68);
    border-bottom-right-radius: 25px;
  }
  .sticky {
    position: fixed;

    top: 240px;
    left: 0px;
    width: 50px;
    background-color: rgb(29, 36, 68);
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

     height: fit-content;
      width: 300px;
      #content {
        display: flex;
      }
      transition: all 0.5s ease-in-out;
    }
  }
`;
