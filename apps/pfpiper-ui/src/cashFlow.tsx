import React from "react";
import { useBudget } from "./useBudget";
import { Box, Text } from "ui";

export function CashFlow() {
  const { budget } = useBudget();
  const paycheckInfo = budget?.paycheckInfo;
  const expenseLineItem = budget?.budgetLineItems.find(
    (x) => x.category === "EXPENSE"
  );

  if (!paycheckInfo || !expenseLineItem) return <Text>N/a</Text>;
  const cashFlow = paycheckInfo.actual - expenseLineItem.actual;
  return (
    <Box>
      <Text>Current cashflow</Text>
      <Text variant="caption">
        <strong>Current income:</strong> {budget.paycheckInfo.actual} USD
      </Text>
      <Text variant="caption">
        <strong>Current toal spending:</strong> {expenseLineItem?.actual} USD
      </Text>
      <Text variant="header" css={{ color: cashFlow < 0 ? 'red' : 'green' }}>
        Cashflow: {Math.round(cashFlow)} USD
      </Text>
    </Box>
  );
}
