import styled from 'styled-components';

export const FloatingTextStyled = styled.div`
  position: absolute;
  margin-top: 100px;
  left: 15px;
  height: 100px;
  width: 400px;
  background-color: transparent;
  color: ${({ theme }) => theme.textContrast};
  p {
    font-size: 1.1rem;
    margin-bottom: 0;
    font-weight: 500;
    text-align: auto;
  }
  @media (max-width: 968px) {
    display: flex;
    position: absolute;
    bottom: 150px;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 768px) {
    position: absolute;
    bottom: 150px;
    left: 10px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    p {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 480px) {
    .info {
      display: none;
    }
  }
`;
export const FloatingTextRightStyled = styled.div`
  position: absolute;
  margin-top: 0px;
  right: 0px;
  height: 100px;
  margin-right: ${(props) => (props.caribe ? '0px' : '0px')};

  width: ${(props) => (props.caribe ? '200px' : '400px')};

  background-color: transparent;
  color: ${({ theme }) => theme.textContrast};
  p {
    font-size: 1.7rem;
    margin-bottom: 0;
    font-weight: 500;
    text-align: auto;
  }
  @media (max-width: 968px) {
    p {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 768px) {
    p {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 1.2rem;
    }
  }
`;

export const ButtonFloatingStyled = styled.button`
  width: 70%;
  height: 50px;
  margin-top: 50px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.primary};
  opacity: 0.8;
  color: ${({ theme }) => theme.textContrast};
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export const FloatingTextIslandsStyled = styled.div`
  position: absolute;
  margin-top: 50px;
  left: 15px;
  height: 100px;
  bottom: 150px;

  width: 550px;
  background-color: transparent;
  color: ${({ theme }) => theme.textContrast};
  p {
    font-size: 1.3rem;
    margin-bottom: 0;
    font-weight: 500;
    text-align: auto;
  }

  @media (max-width: 968px) {
    display: flex;
    position: absolute;
    bottom: 150px;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 768px) {
    position: absolute;
    bottom: 150px;
    left: 10px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    p {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 480px) {
    .info {
      display: none;
    }
  }
`;
