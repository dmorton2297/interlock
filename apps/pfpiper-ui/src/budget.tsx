import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Bar,
  Rectangle,
} from "recharts";
import { Box, Button, Flex, Modal, Text, Tokens } from "ui";
import { useBudget } from "./useBudget";
import { BudgetLineItem } from "./types";

export function Budget() {
  const { budget } = useBudget({ onlyUseCache: false });
  const [expandOpen, setExpandOpen] = useState(false);
  const lineItems = budget?.budgetLineItems.map((x) => ({
    ...x,
    overage: x.available < 0 ? Math.abs(x.available) : 0,
  }));

  if (!budget)
    return (
      <Text css={{ color: Tokens.COLOR_WHITE }}>Sign in to fetch data</Text>
    );

  return (
    <Flex direction="column" css={{ height: "100%" }}>
      <Flex justify="between">
        <Text>Budget insights</Text>
        <Button
          css={{ cursor: "pointer", width: "fit-content", height: 'fit-content', alignSelf: 'center' }}
          onClick={() => setExpandOpen((val) => !val)}
        >
          expand
        </Button>
      </Flex>

      <Box
        css={{
          fontSize: 10,
          flexGrow: 1,
        }}
      >
        <Graph lineItems={lineItems || []} />
        <Modal
          open={expandOpen}
          handleCloseModal={() => setExpandOpen((val) => !val)}
          css={{ width: "80vw", height: "80vh", maxWidth: 1000, fontSize: 11 }}
          padding="large"
        >
          <Text variant="header">Budget insights</Text>
          <Graph lineItems={lineItems || []} />
        </Modal>
      </Box>
    </Flex>
  );
}

function Graph(props: { lineItems: (BudgetLineItem & { overage: number })[] }) {
  const { lineItems } = props;
  return (
    <ResponsiveContainer height="100%" width="99%">
      <BarChart
        layout="vertical"
        data={lineItems
          ?.sort((a, b) => b.budget - a.budget)
          .filter(
            (x) => !["Student loans", "Rent", "EXPENSE"].includes(x.category)
          )}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid />
        <YAxis type="category" dataKey="category" textAnchor="end" width={80} />
        <XAxis type="number" label="Dollars (USD)" height={50} />
        <Tooltip />
        <Legend layout="horizontal" verticalAlign="top" align="right" />
        <Bar
          dataKey="actual"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
          stackId="a"
        />
        <Bar
          dataKey="available"
          fill={Tokens.COLOR_GRAY}
          activeBar={<Rectangle fill="pink" stroke="blue" />}
          stackId="a"
        />
        <Bar
          dataKey="overage"
          fill="orange"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
          stackId="a"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
