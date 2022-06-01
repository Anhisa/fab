import styled from 'styled-components';

export const FloatingButtonStyled = styled.div`
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }


  #menuName {
    font-weight: 500;
    margin-bottom: 0px;
    padding: 50px 10px;
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
  margin: 7px 0;
  padding: 6px 10px;
  border-radius: 20px;

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
    border-top-right-radius: 20px;
    position: absolute;
    bottom: 250px;
    left: 20px;
    background-color: rgb(29, 36, 68, 0.5);
    border-bottom-right-radius: 25px;
  }
  .sticky {
    position: fixed;

    top: 140px;
    left: 0px;
    width: 50px;
    background-color: rgb(29, 36, 68, 0.5);
    z-index: 10;
  }
  .hide {
    width: 90px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    transition: all 0.5s ease-in-out;
    #content {
      display: none;
    }
    left: 20px;
    &:hover {
      //animate

     height: fit-content;
      width: 500px;
      #content {
        display: flex;
      }
      transition: all 0.3s ease-in-out;
    }
  }
`;
