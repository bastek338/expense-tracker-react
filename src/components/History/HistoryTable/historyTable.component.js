import React from "react";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper, TableFooter, TablePagination, Box } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import useStyles from './historyTable.styles';
  
  function TablePaginationActions(props) {
    const classes = useStyles();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onChangePage(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onChangePage(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onChangePage(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 1}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };  

const StyledTableCell = withStyles({
    head: {
      background: '#d9d9d9',
      color: '#6e6e6e',
      width: '20%'
    }
  })(TableCell)

const HistoryTable = ({historyBalance = []}) => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, historyBalance.length - page * rowsPerPage);
    console.log(historyBalance)
    const handleChangePage = (e, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };


    return (
        <TableContainer component={Paper}>
            <Table>
            <TableHead>
                <TableRow>
                    <StyledTableCell>Status</StyledTableCell>
                    <StyledTableCell align="left">Amount</StyledTableCell>
                    <StyledTableCell align="left">Date</StyledTableCell>
                    <StyledTableCell align="left">Description</StyledTableCell>
                    <StyledTableCell align="center">Balance after</StyledTableCell>
                </TableRow>
            </TableHead>
                <TableBody>
                    {(emptyRows > 0 ? historyBalance.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : historyBalance
                    ).reverse().map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                            <Box display="flex" alignItems="center">
                                <FiberManualRecordIcon
                                    className={row.name === 'withdraw' ? classes.HistoryTableWithdraw : classes.HistoryTableDeposit}
                                    style={{fontSize: 16}}
                                /> 
                                {row.name.trim().replace(/^\w/, (w) => w.toUpperCase())}
                            </Box>
                            </TableCell>
                            <TableCell align="left">
                                {row.amount}
                            </TableCell>
                            <TableCell align="left">
                                {dayjs.unix(row.date.seconds).format('DD.MM.YYYY H:mm')}
                            </TableCell>
                            <TableCell align="left">
                                {row.description}
                            </TableCell>
                            <TableCell align="center" className={row.name === 'withdraw' ? classes.HistoryTableWithdraw : classes.HistoryTableDeposit}>
                                {row.accountBalance} $
                            </TableCell>
                        </TableRow>
                    ))}

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            count={historyBalance.length}
                            page={page}
                            rowsPerPage={rowsPerPage}
                            rowsPerPageOptions={[5, 10, 25, {label: 'All', value: -1}]}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )
}

export default HistoryTable;