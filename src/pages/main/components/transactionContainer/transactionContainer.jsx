import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TransactionList from '../transactionList'

export const TransactionListTable = ({ data, selectRow, selected }) => {
 
  return (
    <div>
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
          <TransactionList rows={data} selectRow={selectRow} selectedItem={selected}/>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
