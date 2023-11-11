import { useEffect, useMemo, useState } from "react";
import { Transaction } from "./types";
import categorizeSpendingByCategory from "./utils/categorizeSpendingByCategory";
const BUDGET_DOC_ID = "17selCbhDgNqGuEC_y8kN1eRPTvRCs2NdBmwbkiR1Q5w";
const BUDGET_DOC_RANGE = "A:J";

/* eslint-disable @typescript-eslint/no-explicit-any */
export function useTransactions(params?: { categoryPartialSearch?: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { gapi } = window as Record<string, any>;
  const [fetchedOnce, setFetchedOnce] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[] | undefined>(
    localStorage.getItem("transactions")
      ? JSON.parse(`${localStorage.getItem("transactions")}`)
      : undefined
  );
  const [dataSync, setDataSync] = useState(0);
  /**
   * Print the names and majors of students in a sample spreadsheet:
   * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
   */
  async function loadTransactions() {
    let response;

    try {
      // Fetch first 10 files
      response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: BUDGET_DOC_ID,
        range: BUDGET_DOC_RANGE,
      });
    } catch (err) {
      console.error("Unable to fetch data");
      setTransactions([]);
      return;
    }
    const rows = response.result.values;
    if (!rows || rows.length === 0) {
      setTransactions([]);
      return;
    }
    const headers = rows[0];
    let results: Transaction[] = [];
    rows.forEach((row: string[], j: number) => {
      const result: Record<string, any> = {};
      row.forEach((val: string, i) => {
        if (i !== 0) {
          let header = `${headers[i]}`.toLowerCase();
          let mappedVal: any = val;
          if (headers[i] === "Account #") header = "accoutNumber";
          if (headers[i] === "Amount")
            mappedVal = +mappedVal.replace("$", "").replace(",", "");
          result[header] = mappedVal;
        }
      });
      if (j !== 0) {
        results.push(result as unknown as Transaction);
      }
    });
    const today = new Date();
    results = results.filter(
      (x) =>
        new Date(x.date).getMonth() === today.getMonth() &&
        new Date(x.date).getFullYear() === today.getFullYear()
    );
    setTransactions(results);
    localStorage.setItem("transactions", JSON.stringify(results));
    setFetchedOnce(true);
    console.log("fetched");
    const reloadButton = document.getElementById("authorize_button");
    if (reloadButton) reloadButton.style.visibility = "visible";
  }

  useEffect(() => {
    if (transactions && fetchedOnce) return;
    let interval_id = -1;
    if ((window as any).gapi?.auth?.getToken()) {
      loadTransactions();
    } else {
      interval_id = window.setInterval(
        () => setDataSync((val) => val + 1),
        1000
      );
    }
    if (interval_id > 0) return () => window.clearInterval(interval_id);
  }, [(window as any).gapi, dataSync]);

  const spendingBreakdown = useMemo(
    () => categorizeSpendingByCategory(transactions || []),
    [transactions]
  );
  const rentPayment = useMemo(
    () => transactions?.find((x) => x.category === "Rent"),
    [transactions]
  );
  const totalSpending = useMemo(
    () =>
      spendingBreakdown
        .map((x) => x.value)
        .reduce((acc, curr) => acc + curr, 0) +
      (rentPayment?.amount || 0) * -1,
    [transactions, rentPayment]
  );

  const transfers = useMemo(
    () => transactions?.filter((x) => x.category == "Transfers (General)"),
    [transactions]
  );

  const allTransactions = useMemo(
    () =>
      transactions?.filter(
        (x) =>
          (params?.categoryPartialSearch || "") === "" ||
          x.category
            .toLowerCase()
            .includes(`${params?.categoryPartialSearch}`.toLowerCase())
      ),
    [transactions, params?.categoryPartialSearch]
  );

  return {
    transactions: allTransactions,
    rentPayment,
    spendingBreakdown,
    totalSpending,
    transfers,
  };
}
