import styled from 'styled-components'

export const FloatingTextStyled = styled.div`
  position: absolute;
  top: 250px;
  left: 60px;  
  min-width:100px;
  height: fit-content;
  max-width:450px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  
  p {
    font-size: 1.2rem;
    margin-bottom: 0;
    font-weight: 500;    
    text-align: left;
    pointer-events: none;
  }
  @media (max-width: 1200px) {
    top: 450px;
    
  }
  @media (max-width: 968px) {
    display: flex;
    position: absolute;    
    bottom: 250px;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 768px) {
    position: absolute;
    bottom: 300px;
    left: 10px;
    top: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
       p {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 480px) {
    position: absolute;
    bottom: 300px;
    left: 140px;
    width: 150px;
    top: 100px;
    .info {
      display: none;
    }
  }
`
export const FloatingTextRightIslandStyled = styled.div`
  position: absolute;
  margin-top: 100px;
  top:110px;
  padding: 10px 50px;
  margin: 0 auto;
  margin-right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.text};
  border-radius: 20px;
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
  top: 130px;
  min-width:100px;
  max-width:350px;
  right: 55px;
  border: 3px solid ${({ theme }) => theme.text};
  border-radius: 20px;
  background-color: transparent;
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
    top: 100px;
    height: 60px;
    right: 100px;
    width: fit-content;
    p {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 768px) {
    border: 10px solid transparent;
    top: 100px;
    height: 60px;
    margin: 0 auto;
    width: fit-content;
    p {
      font-size: 1.4rem;
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
  width: 60%;
  height: 50px;
  margin-top: 50px;
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
    width: 100%;
    height: 40px;
  }
  @media (max-width: 480px) {
    width: 70%;
    height: 40px;
  }
`

export const FloatingTextIslandsStyled = styled.div`
  position: absolute;  
  left: 60px;  
  bottom: 150px;
  width: 550px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  p {
    font-size: 1.2rem;
    margin-bottom: 0;
    font-weight: 500;
    text-align: auto;
  }

  @media (max-width: 968px) {
    display: flex;
    position: absolute;
    top: 450px;    
    justify-content: center;
    flex-direction: column;    
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
`
