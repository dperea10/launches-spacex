import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { DateTime } from 'luxon';
import { useNavigate } from "react-router-dom";
import _ from 'lodash';

interface Column {
  id: "name" | "date_utc" | "launchpad" | "flight_number";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number | any) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Mission", minWidth: 170 },
  { 
    id: "date_utc",
    label: "Date UTC",
    minWidth: 100,
    format: (value: any) => DateTime.fromISO(value).toFormat('YYYY-MM-DD')
  },
  { id: "launchpad", label: "Launchedpad", minWidth: 100 },
  { id: "flight_number", label: "Fligth Number", minWidth: 100 },
];

export default function StickyHeadTable({rows}:any) {
  const navigate = useNavigate()
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleSeeMovieDetailClick = (flight_number: any) => {
    navigate(`/launchpad/${flight_number}`);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "90%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: { [x: string]: any; date_utc: any }) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.date_utc}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                        onClick={()=> handleSeeMovieDetailClick(row.flight_number)}
                          key={column.id}
                          align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 50]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
