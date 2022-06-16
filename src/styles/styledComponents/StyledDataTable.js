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
margin-right: 5px;
.rdt_TableHeader{
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};
  padding: 0px;
  margin: 0px;  
  p{
    font-weight: 500;
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
    text-align: center;

  }  
  border-bottom: 1px solid white;
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;

  
}
.rdt_Table{
  width: 100%;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-left: 2px solid ${({ theme }) => theme.toggleBorder};
  border-right: 2px solid ${({ theme }) => theme.toggleBorder};
  border-bottom: 2px solid ${({ theme }) => theme.toggleBorder};
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
  .rdt_ExpanderRow{
    &:last-child{
      border-bottom: 0px;
      border-bottom-right-radius: 35px;
      border-bottom-left-radius: 35px;
      .expanded {
       
          border-bottom: 0px;
          border-bottom-right-radius: 35px;
          border-bottom-left-radius: 35px;
       
      }
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

export const EmptyDataTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  h4{
    font-weight: 500;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  background-color: ${({ theme }) => theme.background};
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
`