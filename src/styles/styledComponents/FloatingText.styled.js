import styled from 'styled-components';

export const FloatingTextStyled = styled.div`
  position: absolute;
  margin-top: 50px;
  left: 15px;
  height: 100px;


  width: 550px;
  background-color:transparent;
  color:black ;
  p{
    font-size: 1.3rem;
    margin-bottom: 0;
    font-weight: 500;
    text-align: auto;
   
  }
  @media (max-width: 968px) {
    display: flex;
    justify-content: center;
    p{
      font-size: 0.8rem;
    }

  }

`
export const FloatingTextRightStyled = styled.div`
  position: absolute;
  margin-top: 50px;
  right: 0px;
  height: 100px;
  margin-right: ${props => props.caribe ? '0px' : '0px'};

  width:  ${props => props.caribe ? '200px' : '400px'};

  background-color:transparent;
  color:black ;
  p{
    font-size: 1.7rem;
    margin-bottom: 0;
    font-weight: 500;
    text-align: auto;
   
  }

`

export const ButtonFloatingStyled = styled.button`
  width: 80%;
  height: 50px;
  margin-top: 50px;
  border-radius:15px ;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.textContrast};
`

export const FloatingTextIslandsStyled = styled.div`
  position: absolute;
  margin-top: 50px;
  left: 15px;
  height: 100px;
  bottom: 150px;

  width: 550px;
  background-color:transparent;
  color:black ;
  p{
    font-size: 1.3rem;
    margin-bottom: 0;
    font-weight: 500;
    text-align: auto;
   
  }
  @media (max-width: 968px) {
    display: flex;
    justify-content: center;
    p{
      font-size: 0.8rem;
    }

  }
`

