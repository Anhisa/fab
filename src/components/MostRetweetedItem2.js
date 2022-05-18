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
import { usePeriod } from '../hooks/usePeriod';

const api = 'https://fundacionandresbello.org/wp-json/fab/v1/most-retweeted';

export const MostRetweetedItem2 = ({ periodId={startDate:1, endDate:1}, accountId }) => {
  // period id = [1,3] or id = [2,4]

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    padding: 5
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    ease: theme.transitions.easing.easeInOut,
    padding: 8

  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.background.paper,
    padding: 0,



  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export const MostRetweetedItem2 = ({ MostRetweetedItem }) => {
  const response = useGetData(api);
  const items = response.data;


  const tweetNumber = items
    .filter(
      (item) =>
        item.official_account_id === accountId && (parseInt(item.period_id ) >= periodId.startDate && parseInt(item.period_id ) <= periodId.endDate)
    )
    .map((item) => parseInt(item.tweets_number));

  const totaltweets = tweetNumber.reduce(
    (totaltweetsNumber, item) => totaltweetsNumber + item,
    0
  );
    //console.log('tweetNumber',totaltweets);
  const accountInfo = [];
  const account = items
    .filter(
      (item) =>
        item.official_account_id === accountId &&  (parseInt(item.period_id ) >= periodId.startDate && parseInt(item.period_id ) <= periodId.endDate)
    )
    //console.log('account', account);
    .find((item) => item.official_account_id === accountId);
  if (account) {
    accountInfo.push(account.official_account);
    accountInfo.push(account.period_id);
    accountInfo.push(account.official_account_name_spa);
    accountInfo.push(account.most_retweeted_category_desc_spa);
  }

  const data = items.filter(
    (item) =>
      item.official_account_id === accountId &&   (parseInt(item.period_id ) >= periodId.startDate && parseInt(item.period_id ) <= periodId.endDate)
  );

  // console.log(data);

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

  const rows = data.map((item) =>
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
        <h3> {accountInfo[0]} </h3>
        <h5>Periodo de {periodId.startDate.toString()} a {periodId.endDate.toString()} </h5>
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
