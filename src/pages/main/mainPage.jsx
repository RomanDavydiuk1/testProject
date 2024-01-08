import React, { useCallback, useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { useTransactions } from "../../shared/hooks/useTransactions";
import { Spacer } from "../../shared/components/spacer";
import { TransactionDetailsComponent } from "./components/transactionDetails/transactionDetails";
import TransactionList from "../main/components/transactionList/TransactionList"; 


export const Main = () => {
  const { data, loading } = useTransactions(true);
  const [selected, setSelected] = useState(null);

  const selectRow = useCallback((event, row) => {
    setSelected(row);
  }, []);
   

  if (loading) {
    return (
      <> 
        <Skeleton />
        <Skeleton count={15} duration={2} height={30} />
      </>
    );
  }

  return (
    <div>
      <div>
        <TransactionDetailsComponent selected={selected} />
        <Spacer height={20} />
        <TransactionList rows={data} selectRow={selectRow} selectedItem={selected} />
      </div>
    </div>
  );
};
