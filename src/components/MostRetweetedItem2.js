import React from 'react';
import { useGetData } from '../hooks/useGetData';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Link} from 'react-router-dom';
import { usePeriod } from '../hooks/usePeriod';

export const MostRetweetedItem2 = ({
  newData,
  period = { startDate: 1, endDate: 4 },
}) => {
  console.log('newdata', newData);
  console.log(period, 'period');

  const tweetNumber = newData.map((item) => parseInt(item.tweets_number));

  const totaltweets = tweetNumber.reduce(
    (totaltweetsNumber, item) => totaltweetsNumber + item,
    0
  );
  //console.log('tweetNumber',totaltweets);
  const accountInfo = [];
  const account = newData[0];

  if (account) {
    accountInfo.push(account.official_account);
    // accountInfo.push(account.period_id);
    accountInfo.push(account.official_account_name_spa);
    accountInfo.push(account.most_retweeted_category_desc_spa);
  }

  function createData(
    userAccountDesc,
    userAccount,
    categoría,
    tweets_number,
    catDesc
  ) {
    return {
      userAccountDesc,
      userAccount,
      categoría,
      tweets_number,
      history: [
        {
          catDesc,
        },
      ],
    };
  }

  const rows = newData.map((item) =>
    createData(
      item.most_retweeted_description_spa,
      item.user_account,
      item.most_retweeted_category_spa,
      parseInt(item.tweets_number),
      item.most_retweeted_category_desc_spa
    )
  );

  Row.propTypes = {
    row: PropTypes.shape({
      userAccountDesc: PropTypes.string.isRequired,
      userAccount: PropTypes.string.isRequired,
      categoría: PropTypes.string.isRequired,
      tweets_number: PropTypes.number.isRequired,
      history: PropTypes.arrayOf(
        PropTypes.shape({
          catDesc: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  };

  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <StyledTableRow  sx={{ '& > *': { borderBottom: 'unset' } }}>
          <StyledTableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </StyledTableCell>
          <StyledTableCell component="th" scope="row">
            {row.userAccountDesc}
          </StyledTableCell>
          <StyledTableCell key= {`rowInfo1-${row.users_most_retweeted_id}`} align="right">{row.userAccount}</StyledTableCell>
          <StyledTableCell key= {`rowInfo2-${row.users_most_retweeted_id}`} align="right">{row.categoría}</StyledTableCell>
          <StyledTableCell key= {`rowInfo3-${row.users_most_retweeted_id}`} align="right">{row.tweets_number}</StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                {/* <Typography variant="h6" gutterBottom component="div">
                  Descripción de la Categoría
                </Typography> */}
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell>Descripción de la Categoría</StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <StyledTableRow
                        key={`catDesc-${historyRow.official_account_id}`}
                      >
                        <StyledTableCell key= {`rowInfo4-${row.users_most_retweeted_id}`} component="th" scope="row">
                          {historyRow.catDesc}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </StyledTableCell>
        </StyledTableRow>
      </React.Fragment>
    );
  }

  return (
    <div className="App">
      <div className="card">
        <h3> {accountInfo[2]} </h3>
        <h3> <Link to={`/diplomacia-digital/${accountInfo[0]}`}>{accountInfo[0]}</Link> </h3>
        <h5>
          Periodo de {period.startDate.toString()} a{period.endDate.toString()}
        </h5>
        <h5>Tweets totales periodo - {totaltweets} </h5>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell />
                <StyledTableCell>Nombre de la cuenta</StyledTableCell>
                <StyledTableCell align="right">Cuenta</StyledTableCell>
                <StyledTableCell align="right">Categoría</StyledTableCell>
                <StyledTableCell align="right">Número de Tweets</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row
                key={`rowItem-${row.users_most_retweeted_id}`}
                row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
