import styled from 'styled-components';

export const CollapsableTableStyled = styled.div`
.column{
  width: ${props => props.usuario === 'usuario' ? '100%' : '50%'};
}
  button {
    background: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px 10px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      background: #e6e6e6;
    }
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
