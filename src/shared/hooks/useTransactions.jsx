import { useCallback, useEffect, useState } from "react";
import { getTransactions } from "../services/transactionsService";

export const useTransactions = (shouldInit = false) => {
  const [ transactions, setTransactions ] = useState({
    data: [],
    error: null,
    loading: false,
  });

  const setLoading = (loading) => {
    setTransactions((prevState) => {
      return {
        ...prevState,
        loading: loading,
      };
    });
  };

  const fetchItems =  useCallback(async () => {
    try {
      setLoading(true);
      const data = await getTransactions();
      setTransactions((prevState) => {
        return { ...prevState, data: data };
      });
    } catch (err) {
      setTransactions((prevState) => {
        return { ...prevState, data: [], error: err};
      });
    }
     finally {
      setLoading(false);
    }
  },[]);

  useEffect(() => {
    if (shouldInit) {
      fetchItems();
    }
  }, [shouldInit, fetchItems]);

  return {
   ...transactions,
    loadTransactions: fetchItems,
  };
};
