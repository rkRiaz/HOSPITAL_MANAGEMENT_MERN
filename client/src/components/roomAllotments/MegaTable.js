import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import Alert from '@material-ui/lab/Alert';
import { Button, ButtonGroup, Chip, IconButton, TextField, Tooltip } from '@material-ui/core';
import { AssessmentOutlined, AssignmentOutlined, DeleteOutlined, Edit, GetAppOutlined, PictureAsPdfOutlined, PrintOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';



function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'roomNo', numeric: false, disablePadding: true, label: 'Room No' },
  { id: 'roomType', numeric: true, disablePadding: false, label: 'Room Type' },
  { id: 'patientName', numeric: true, disablePadding: false, label: 'Patient Name' },
  { id: 'doctorName', numeric: true, disablePadding: false, label: 'Doctor Name' },
  { id: 'allotmentDate', numeric: true, disablePadding: false, label: 'Allotment Date' },
  { id: 'dischargeDate', numeric: true, disablePadding: false, label: 'Discharge Date' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  }
}));



const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          All Rooms
        </Typography>
      )}
        {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [alert, setAlert] = React.useState(false)
  const componentRef = React.useRef();

  function createData(roomNo, roomType, patientName, doctorName, allotmentDate, dischargeDate, status) {
    return { roomNo, roomType, patientName, doctorName, allotmentDate, dischargeDate, status };
  }
  const rows = [
    createData('R01', 'General', 'Ahmed Ullah', 'Zakir Hossain', '10-20-20', '22-10-20', <Chip size='small' label="avaiable" color='primary' />),
    createData('R02', 'AC', 'Ahmed Ullah', 'Zakir Hossain','10-20-20', '-', <Chip size='small' label="not discharged" color='secondary' />),
    createData('R03', 'ICU', '-', '-','-', '-',  <Chip size='small' label="not allot" color='default' />),
  ];

  const deleteHandler = (e) => {
    console.log("api should be added for delete patient where id = " + selected[0])
  }

  const printAction = useReactToPrint({
    content: () => componentRef.current
  })

  const handleAlert = (e) => {
    e.preventDefault()
    setAlert(!alert)
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.roomNo);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, roomNo) => {
    const selectedIndex = selected.indexOf(roomNo);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, roomNo);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (roomNo) => selected.indexOf(roomNo) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <div>
        <div style={{display: 'flex', justifyContent: 'space-between', margin: 15}}>
            <div style={{flex: 0.9}}>
              {alert ? <Alert onClose={() => {setAlert(!alert)}} severity="warning">Select a patient please!</Alert> : null}
            </div>
            <TextField
            label="Search Patient"
            size="small"
            variant="outlined"
            onChange={(e) => setSearch(e.target.value)}
            />
        </div>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer >
          <Table ref={componentRef}
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.roomNo);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.roomNo)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.roomNo}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.roomNo}
                      </TableCell>
                      <TableCell align="right">{row.roomType}</TableCell>
                      <TableCell align="right">{row.patientName}</TableCell>
                      <TableCell align="right">{row.doctorName}</TableCell>
                      <TableCell align="right">{row.allotmentDate}</TableCell>
                      <TableCell align="right">{row.dischargeDate}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    <div className="megatable__print">
      <ButtonGroup size={window.innerWidth < 768 ? 'small' : 'medium'} style={{marginTop: 20}} color="default" aria-label="outlined primary button group">
          <Button onClick={printAction}><PrintOutlined/>&nbsp;PRINT</Button>
          <Button><PictureAsPdfOutlined/>&nbsp;PDF</Button>
          <Button><GetAppOutlined/>&nbsp;CSV</Button>
      </ButtonGroup>
    </div>
    <div className="megatable__ActionButtons" style={{marginTop: 20}}>
      {
        selected.length != 0 ?
          <Link to={`editRoomAllotment/${selected[0]}`} style={{textDecoration: 'none'}}>
            <Button
              size={window.innerWidth < 768 ? 'small' : 'medium'}
              variant="contained"
              color="primary"
              startIcon={<Edit />}
            >
              Edit Allotment
            </Button>
          </Link> : 
            <Button
              size={window.innerWidth < 768 ? 'small' : 'medium'}
              onClick={handleAlert}
              variant="contained"
              color="primary"
              startIcon={<Edit />}
              >
              Edit Allotment
          </Button>
      }
    </div>
    </div>
  );
}
