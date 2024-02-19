import styled from 'styled-components'

export const FloatingTextStyled = styled.div`
  position: absolute;
  top: 435px;
  left: 60px;  
  min-width:100px;
  height: fit-content;
  max-width:450px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  
  p {
    font-size: 1rem;
    margin-bottom: 0;
    font-weight: 500;    
    text-align: left;
    pointer-events: none;
  }
  /* @media (max-width: 1200px) {
    top: 450px;
    
  } */
  @media (max-width: 968px) {
    display: flex;
    position: absolute;    
    justify-content: center;
    flex-direction: column;
    width: 300px;
    p {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 768px) {
    position: absolute;
    left: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 232px;
        p {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 480px) {
    top: 500px;
    width: 150px;
    .info {
      display: none;
    }
  }
`
export const FloatingTextRightIslandStyled = styled.div`
  position: absolute;
  margin-top: 100px;
  top: 163px;
  padding: 10px 50px;
  margin: 0 auto;
  margin-right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  p {
    font-size: 1.2rem;
    margin-bottom: 0;
    font-weight: 600;
    text-align: center;
  }
  @media (max-width: 968px) {
    p {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 768px) {
    p {
      font-size: 1.2rem;
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
`

export const FloatingTextRightStyled = styled.div`
  position: absolute;
  top: 193px;
  min-width:193px;
  max-width:350px;
  right: 55px;
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  p {
    padding: 5px;
    font-size: 1.4rem;
    margin-bottom: 0;
    font-weight: 600;
    text-align: auto;
  }
  @media (max-width: 968px) {
    height: 60px;
    right: 10px;
    max-width: 150px;
    p {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 768px) {
    height: 60px;
    max-width: 150px;
    top: 193px;
    p {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 1rem;
    }
  }
`

export const ButtonFloatingStyled = styled.button`
  position: absolute;
  width: 70%;
  height: 40px;
  bottom: 180px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.primary};
  opacity: 0.8;  
  color: ${({ theme }) => theme.textContrast};
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    width: fit-content;
  }
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
  @media (max-width: 768px) {
    height: 40px;
  }
  @media (max-width: 480px) {
    bottom: auto;
    width: 100%;
    height: 40px;
  }
`
export const ButtonFloatingIslandStyled = styled.button`
  position: absolute;
  width: 70%;
  height: 40px;
  bottom: 180px;
  margin-bottom: 10px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.primary};
  opacity: 0.8;  
  color: ${({ theme }) => theme.textContrast};
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    width: fit-content;
  }
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
  @media (max-width: 768px) {
    bottom: 100px;
    height: 40px;
  }
  @media (max-width: 480px) {
    bottom: auto;
    margin-bottom: auto;
  }
`

export const FloatingTextIslandsStyled = styled.div`
  position: absolute;  
  left: 40px; 
  bottom: 30px;
  width: 450px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  display: flex;
  p {
    font-size: 1.1rem;
    margin-bottom: 0;
    font-weight: 500;
    text-align: auto;
  }

  @media (max-width: 968px) {
    justify-content: center;
    flex-direction: column;    
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 768px) {
    position: absolute;
    bottom: 70px;
    left: 10px;
    width: 280px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    /* width: 300px; */
    p {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 480px) {
    bottom: 100px;
    .info {
      display: none;
    }
  }
`
