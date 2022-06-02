import DataTable from "react-data-table-component";
import styled from "styled-components";

export const StyledDataTable = styled.div`
  /*
  rdt_Table
rdt_TableRow
rdt_TableCol
rdt_TableCol_Sortable
rdt_TableCell
rdt_TableHeader
rdt_TableFooter
rdt_TableHead
rdt_TableHeadRow
rdt_TableBody
rdt_ExpanderRow
  */
border: 2px solid ${({ theme }) => theme.toggleBorder};

margin-top: 5px;

.dataTable{
  width: 50%;
  
}
.rdt_TableHeader{
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};
  padding: 0px;
  margin: 0px;  
  p{
    font-weight: 500;
    margin: 0;
    padding: 0;
    text-align: center;

  }  
  border-bottom: 1px solid black;

  
}
.rdt_Table{
  width: 100%;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  .rdt_TableHeadRow{
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};    
  }
  .rdt_TableRow{
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};  
    h6{
      font-weight: 700;
    }  
  }
}
.noData{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
}
  
`