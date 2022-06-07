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
/* border: 2px solid ${({ theme }) => theme.toggleBorder};
border-top-right-radius: 35px;
  border-top-left-radius: 35px; */
height: fit-content;
padding: 0px !important;
width: 100%;
margin-top: 25px;


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
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;

  
}
.rdt_Table{
  width: 100%;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-bottom-right-radius: 35px;
  border-bottom-left-radius: 35px;
  ;  
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
    //last row
    &:last-child{
      border-bottom: 0px;
      border-bottom-right-radius: 35px;
  border-bottom-left-radius: 35px;
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