import { useEffect, useState } from "react";
import { Budget, BudgetLineItem, BudgetSummaryLineItem } from "./types";
const BUDGET_DOC_ID = "17selCbhDgNqGuEC_y8kN1eRPTvRCs2NdBmwbkiR1Q5w";
const BUDGET_DOC_RANGE = "Monthly Budget!A:H";

const parseMoney = (input: string) => +input.replace("$", "").replace(",", "");

export function useBudget(options?: { onlyUseCache?: boolean }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { gapi } = window as Record<string, any>;
  const [fetchedOnce, setFetchedOnce] = useState(!!options?.onlyUseCache);
  const [budget, setBudget] = useState<Budget | undefined>(
    localStorage.getItem("budget")
      ? JSON.parse(`${localStorage.getItem("budget")}`)
      : undefined
  );
  const [dataSync, setDataSync] = useState(0);
  /**
   * Print the names and majors of students in a sample spreadsheet:
   * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
   */
  async function loadBudget() {
    let response;

    try {
      // Fetch first 10 files
      response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: BUDGET_DOC_ID,
        range: BUDGET_DOC_RANGE,
      });
    } catch (err) {
      console.error("Unable to fetch data");
      return;
    }
    let rows = response.result.values as any[][];
    rows = rows.map((x) => x.filter((j) => j !== "")).filter((x) => x.length);
    const headers = rows[9];
    const budgetData = rows.slice(13);
    const summaryRows = budgetData.filter((x) => x.length === 6);
    const budgetItems = budgetData.filter((x) => x.length !== 6);

    if (!rows || rows.length === 0) {
      return;
    }
    const income: Record<string, any> = {};
    income[headers[0].toLowerCase()] = rows[11][0];
    income[headers[1].toLowerCase()] = parseMoney(rows[11][1]);
    income[headers[2].toLowerCase()] = parseMoney(rows[11][2]);
    income[headers[3].toLowerCase()] = parseMoney(rows[11][3]);

    const summaryRowHeaders = [
      "category",
      "percentageOfBudget",
      "",
      "budget",
      "actual",
      "available",
    ];
    const summaryInfo: BudgetSummaryLineItem[] = [];
    summaryRows.forEach((x) => {
      const result: Record<string, any> = {};
      x.forEach((val, i) => {
        const header = summaryRowHeaders[i];
        let mappedVal = val;
        if (header.length === 0) return;
        if (
          [
            summaryRowHeaders[3],
            summaryRowHeaders[4],
            summaryRowHeaders[5],
          ].includes(header)
        ) {
          mappedVal = parseMoney(val);
        }
        result[header] = mappedVal;
      });
      summaryInfo.push(result as BudgetSummaryLineItem);
    });

    const results: BudgetLineItem[] = [];

    budgetItems.forEach((x) => {
      const result: Record<string, any> = {};
      x.forEach((val: string, i) => {
        let mappedVal: string | number = val;
        const header = `${headers[i]}`.toLowerCase();
        if (
          [
            summaryRowHeaders[3],
            summaryRowHeaders[4],
            summaryRowHeaders[5],
          ].includes(header)
        ) {
          mappedVal = parseMoney(val);
        }
        result[header] = mappedVal;
      });
      results.push(result as BudgetLineItem);
    });
    const mapped = {
      budgetLineItems: results,
      budgetSummaryItems: summaryInfo,
      paycheckInfo: income as BudgetLineItem,
    };
    setBudget(mapped);
    localStorage.setItem("budget", JSON.stringify(mapped));
    setFetchedOnce(true);
  }

  useEffect(() => {
    if (budget && fetchedOnce) return;
    let interval_id = -1;
    if ((window as any).gapi?.auth?.getToken()) {
      loadBudget();
    } else {
      interval_id = window.setInterval(
        () => setDataSync((val) => val + 1),
        1000
      );
    }
    if (interval_id > 0) return () => window.clearInterval(interval_id);
  }, [(window as any).gapi, dataSync]);

  return { budget };
}
