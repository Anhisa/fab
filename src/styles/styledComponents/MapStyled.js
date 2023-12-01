import styled from 'styled-components'

export const MapStyled = styled.div`
  /* cursor: grab; */
  width: 98vw;
  .geo {
    //hover
    &:hover {
      fill: #ffce21;
    }
  }
  // add animation ease in
  opacity: 0;
  animation: fadeIn 1s ease-in;
  animation-fill-mode: forwards;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .map {
    opacity: 0;
    width: 100%;
    animation: fadeIn 1s ease-in;
    animation-fill-mode: forwards;
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    display: flex;
    flex-direction: column;
  }
  .controls {
    position: absolute;
    top: 300px;
    right: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
    padding: 0.5rem;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    button {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;

      svg {
        width: 100%;
        height: 100%;
      }
    }
    @media (max-width: 968px) {
      top: 120px;
      right: 50px;
      width: 150px;
    }
    @media (max-width: 768px) {
      top: 150px;
      right: 50px;
      width: 100px;
    }
    @media (max-width: 480px) {
      top: 350px;
      right: 10px;
      width: 100px;
    }
  }
`
