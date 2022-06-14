import styled from 'styled-components';

export const SectionToolsStyled = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding:20px;
  width: 100%;
  flex-wrap: nowrap;
  .comparisonPeriod{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      background-color: ${({ theme }) => theme.secondary};
      color: ${({ theme }) => theme.text};
      margin-top: 10px;
      width: 100%;
    }

  }
  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
  }

`