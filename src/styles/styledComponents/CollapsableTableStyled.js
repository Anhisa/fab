import styled from 'styled-components';

export const CollapsableTableStyled = styled.div`
.column{
  width: ${props => props.usuario === 'usuario' ? '100%' : '50%'};
}

  gap: 10px;
  margin-top: 10px;
 

  .open {
    display: flex;
  }
  .closed {
    display: none;
  }
`;
