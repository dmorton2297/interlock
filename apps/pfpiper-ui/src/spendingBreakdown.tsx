import React, { useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { useTransactions } from "./useTransactions";
import { Box, Button, Flex, Modal, Text, Tokens } from "ui";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FC8A42",
  "#CD80C2",
  "#EFD042",
];

export function SpendingBreakdown() {
  const { spendingBreakdown } = useTransactions();
  const [expandOpen, setExpandOpen] = useState(false);
  return (
    <Flex direction="column" css={{ height: "100%" }}>
      <Flex justify="between">
        
        <Text
          css={{
            alignSelf: "center",
            paddingLeft: Tokens.SPACING_1,
            marginTop: 5,
          }}
        >
          Spending breakdown (excluding rent)
        </Text>
        <Button
          css={{
            cursor: "pointer",
            width: "fit-content",
            height: "fit-content",
            alignSelf: "center",
          }}
          onClick={() => setExpandOpen((val) => !val)}
        >
          expand
        </Button>
      </Flex>
      <Box css={{ fontSize: 10, flexGrow: 1 }}>
        <Graph spendingBreakdown={spendingBreakdown} />
      </Box>
      <Modal
          open={expandOpen}
          handleCloseModal={() => setExpandOpen((val) => !val)}
          css={{ width: "80vw", height: "80vh", maxWidth: 1000, fontSize: 11 }}
          padding="large"
        >
          <Text variant="header">Spending Breakdown</Text>
          <Graph spendingBreakdown={spendingBreakdown} />
        </Modal>
    </Flex>
  );
}

function Graph(props: {
  spendingBreakdown: { name: string; value: number }[];
}) {
  const { spendingBreakdown } = props;
  return (
    <ResponsiveContainer width="99%">
      <PieChart>
        <Pie
          data={spendingBreakdown}
          dataKey="value"
          cx="50%"
          cy="50%"
          labelLine={false}
          label={(entry) => `${entry.name} ~ $${Math.round(entry.value)}`}
          innerRadius={50}
        >
          {spendingBreakdown.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
