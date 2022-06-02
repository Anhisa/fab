import styled from 'styled-components';

export const ColorBarStyled = styled.div`
  /* background: white; */
  background: linear-gradient(90deg, #edf7ff 0%, #1d9bf0 100%);
  /* opacity: 1; */
  /* border: 1px solid black; */
  width: 200px;
  height: 30px;

  pointer-events: none;
  border-radius: 20px;


`;

export const ColorBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;


 position: absolute;
  bottom: 50px;
  right: 50px;
  em{
    font-size: 1rem;
    font-weight: 600;
    margin: 15px;
  }
`
