import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

const createData = (id, date, accountNumber, transaction, price) => {
  return { id, date, accountNumber, transaction, price };
};

const TransactionList = ({ rows, selectRow, selectedItem }) => {
  const mappedData = rows.map((el) => {
    return createData(el.id, el.date, el.accountNumber, el.transaction, el.price);
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Account number</TableCell>
            <TableCell align="right">Transaction info</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mappedData.map((row) => (
            <TableRow key={row.id}
                    hover
                    onClick={(event) => selectRow(event, row)}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    selected={selectedItem && selectedItem.id === row.id ? true : false}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.accountNumber}</TableCell>
              <TableCell align="right">{row.transaction}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionList;
