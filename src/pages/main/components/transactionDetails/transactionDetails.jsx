import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { calculatePoints } from "../../../../shared/utils/pointsCalculator";

export const TransactionDetailsComponent = ({ selected }) => {
  const calculateItem = selected ? calculatePoints(selected.price) : calculatePoints(0);

  const createData = (id, cashbackX1, cashbackX2, totalCashback) => {
    return { id, cashbackX1, cashbackX2, totalCashback };
  };

  const calculated = selected && createData(selected.id, calculateItem.x1Bonus, calculateItem.x2Bonus, calculateItem.total);

  return (
    <div>
      {selected && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">CashbackX1</TableCell>
                <TableCell align="right">CashbackX2</TableCell>
                <TableCell align="right">Total cashback</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={calculated.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {calculated.id}
                </TableCell>
                <TableCell align="right">{calculated.cashbackX1}</TableCell>
                <TableCell align="right">{calculated.cashbackX2}</TableCell>
                <TableCell align="right">{calculated.totalCashback}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
