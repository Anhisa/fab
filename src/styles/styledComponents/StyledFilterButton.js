import styled from "styled-components";
export const StyledFilterButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 15px;
  box-shadow: 0px 3px 5px black;
  display: flex;  
  justify-content: flex-start;
  align-items: center;
  border: none;
  background: #a4c2d5;
  color: #121f45;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  border: 1px solid black;
  &:hover {
    background-color: #e6e6e6;
  }
  &:active {
    background-color: #d6d6d6;
    transform: translateY(5px);
    box-shadow: 0px 0px 0px black;
  }
  .icon{
    // no click events
    pointer-events:none ;

  }

`