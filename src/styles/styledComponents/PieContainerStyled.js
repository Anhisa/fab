import styled from 'styled-components';

export const PieContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  width: 100%;
  gap: 10px;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const PieChartContainer = styled.div`
  display: flex;
min-width: 400px;
max-width: 700px;
width:100%;
  margin-top: 20px;
  padding: 0px !important;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  flex-direction: column;
  min-height: 450px;
  align-items: center;
  justify-content: flex-start;
  h4 {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    margin-bottom: 10px;
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.secondary};
  }
  .table > :not(caption) > * > * {
    padding: 0;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
