import styled from 'styled-components'

export const CountryCardSelectStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;

  width: 80%;
  height: 100%;

  img {
    width: 80px;
    border: 1px solid black;
  }
  p {
    width: 50%;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 1.2rem;
  }

  padding: 10px;
  @media (max-width: 968px) {
    img{
      width: 50px;
    }
    p{
      font-size: 1rem;
    }
  }
  @media(max-width: 768px){

    img {
      width: 30px;
     
    }
    p {
      font-size: 1rem;
      margin-bottom: 10px;

    }  
    
  }
`

export const EmptyCardStyled = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 7px;
  p{
    color: black;
    font-size: 1rem;
    margin: 0;
  }
`
