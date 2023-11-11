import React from "react";
import { Box, Text } from "ui";
import { useBudget } from "./useBudget";
import { useTransactions } from "./useTransactions";
export function BudgetMetrics() {
  const { budget } = useBudget();
  const { transactions } = useTransactions();

  const expenseLineItem = budget?.budgetLineItems.find(
    (x) => x.category === "EXPENSE"
  );
  const rentTransaction = transactions?.find((x) =>
    x.category.toLowerCase().includes("rent")
  );
  if (!budget) return <></>;
  return (
    <Box>
      <Text>Plan</Text>
      <Text variant="caption">
        <strong>Planned Expenses:</strong> {expenseLineItem?.budget} USD
      </Text>
      <Text variant="caption">
        <strong>Planned income:</strong> {budget.paycheckInfo.budget} USD
      </Text>
      <Text variant="caption">
        <strong>Planned cashflow:</strong>{" "}
        {Math.round(budget.paycheckInfo.budget - (expenseLineItem?.budget || 0))} USD
      </Text>
      <Text variant="caption">
        <strong>Rent paid:</strong>{" "}
        {rentTransaction
          ? `YES on ${rentTransaction.date.substring(0, 10)}`
          : "NO"}
      </Text>
    </Box>
  );
}
