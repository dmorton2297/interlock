import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Box, Flex, Input, List, Text, Tokens } from "ui";
import { useTransactions } from "./useTransactions";
import { useBudget } from "./useBudget";
import { Budget } from "./budget";
import { SpendingBreakdown } from "./spendingBreakdown";
import { Transactions } from "./transactions";
import { Transfers } from "./transfers";
import { BudgetMetrics } from "./budgetMetrics";
import { CashFlow } from "./cashFlow";

const cellStyle: React.CSSProperties = {
  padding: Tokens.SPACING_1,
  margin: 2,
  outline: `1px solid ${Tokens.COLOR_BLACK}`,
};
export function Trends() {
  const { transactions } = useTransactions();
  const { budget } = useBudget();
  if (!transactions || !budget)
    return (
      <Text css={{ color: Tokens.COLOR_WHITE }}>Sign in to fetch data</Text>
    );
  return (
    <Box
      css={{
        backgroundColor: Tokens.COLOR_WHITE,
        borderRadius: 5,
        height: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 400px",
        gridTemplateRows: "repeat(4, 1fr) 300px",
        gridColumnGap: 0,
        gridRowGap: 0,
      }}
      padding="small"
    >
      <Box css={{ ...cellStyle, gridArea: "1 / 1 / 3 / 3" }}>
        <SpendingBreakdown />
      </Box>
      <Box css={{ ...cellStyle, gridArea: "1 / 3 / 4 / 4" }}>
        <Budget />
      </Box>
      <Box css={{ ...cellStyle, gridArea: "3 / 1 / 4 / 2" }}>
        <BudgetMetrics />
      </Box>
      <Box css={{ ...cellStyle, gridArea: "3 / 2 / 4 / 3" }}>
        <CashFlow />
      </Box>
      <Box css={{ ...cellStyle, gridArea: "4 / 1 / 6 / 3" }}>
        <Transactions />
      </Box>
      <Box css={{ ...cellStyle, gridArea: "4 / 3 / 6 / 4" }}>
        <Transfers />
      </Box>
    </Box>
  );
}
