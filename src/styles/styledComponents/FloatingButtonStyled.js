import styled from 'styled-components';

export const FloatingButtonStyled = styled.div`
  padding: 10px 16px; 
  display: flex;
  justify-content: center;
  align-items: center;
  #menuName {
   font-weight: 500;
   margin-bottom: 0px;
  }
  //animate

`;

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
    width: 150px;
    background-color: rgb(29, 36, 68);
    z-index: 10;

  }
  .hide {
    padding: 10px;
    width: 150px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 20px;
  
    
    #content {
      display: none;
    }
    left: 0;
    &:hover {
      width: 250px;
      #content {
        display: flex;
      }
    }
  }
`;
