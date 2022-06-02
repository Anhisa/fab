import styled from 'styled-components';

export const DetachableTable = styled.section`
  position: absolute;
  padding: 0px;
  margin: 0px;
  width: 100%;
  
 height: fit-content;
  top: ${(props) => props.top + 120  + 'px'};
  border-radius: 30px;

  left: ${(props) => props.left + 'px'};
  .dotted-line {
    position: absolute;    
    top: -120px;  
    height: 120px;
    
    border-left: 5px dotted black;
    
    
    left: 0;

  }
  max-width: fit-content;
  z-index: 10;
  background: white;
  
  .closed {
    display: none;
    border : 0px none none;
  }
  .open{
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 15px;
    padding: 10px;
    background-color: ${({ theme }) => theme.background};
  }
  .rdt_TableRow{
    &:hover{
      background-color: #ffce21;
    }
  }
  .rdt_TableHeader{
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    border : 1px none none;
    margin-top: 0px;
  }
  .rdt_Table{
    background-color: ${({ theme }) => theme.background};
  
  .rdt_TableHead{
    background-color: ${({ theme }) => theme.background};
  }}
`;
