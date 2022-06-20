import styled from 'styled-components'

export const SectionToolsStyled = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding:20px;
  width: 100%;
  flex-wrap: nowrap;
  gap: 20px;
  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
  }

`
