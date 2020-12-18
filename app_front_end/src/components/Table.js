import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Chip } from '@material-ui/core';

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: "#cfebdc",
    color: "black",
    fontWeight: "bold"
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(firstRow, secondRow, thirdRow, fourthRow, fifthRow) {
  return { firstRow, secondRow, thirdRow, fourthRow, fifthRow };
}

const rows = [
  createData('Frozen yoghurt', 'Dental', '12/10/2020', '12:20pm', <Chip size='small' label="completed" color='primary' />),
  createData('Ice cream sandwich', 'Dental', '12/10/2020', '12:20pm', <Chip size='small' label={'pending'}color="error" />),
  createData('Eclair', 'Dental', '12/10/2020', '12:20pm', <Chip size='small' label={'cancel'}color="secondary" />),
  createData('Cupcake', 'Dental', '12/10/2020', '12:20pm', <Chip size='small' label={'completed'}color="primary" />),
  createData('Gingerbread', 'Dental', '12/10/2020', '12:20pm', <Chip size='small' label={'cancel'}color="secondary" />)
];

const useStyles = makeStyles({
  table: {
    minWidth: 800,
  },
});

export function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Patient Name</StyledTableCell>
            <StyledTableCell>Doctor</StyledTableCell>
            <StyledTableCell>Check-Up</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Time</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.firstRow}>
              <StyledTableCell>{row.firstRow}</StyledTableCell>
              <StyledTableCell>{row.firstRow}</StyledTableCell>
              <StyledTableCell>{row.secondRow}</StyledTableCell>
              <StyledTableCell>{row.thirdRow}</StyledTableCell>
              <StyledTableCell>{row.fourthRow}</StyledTableCell>
              <StyledTableCell>{row.fifthRow}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
