import React, { useState } from "react";
import { Box, Button, Flex, Input, List, Modal, Text, Tokens } from "ui";
import { useTransactions } from "./useTransactions";
import { Transaction } from "./types";

export function Transactions() {
  const [categoryString, setCategoryString] = useState<string>("");
  const [expandOpen, setExpandOpen] = useState(false);
  const { transactions } = useTransactions({
    categoryPartialSearch: categoryString,
  });

  return (
    <Flex direction="column" css={{ gap: 2, height: "100%" }}>
      <Flex justify="between">
        <Text css={{ alignSelf: "end" }}>Transactions</Text>
        <Flex>
          <Input
            label="Category"
            name="category"
            onChange={(e) => setCategoryString(e.target.value)}
            variant="label-hidden"
            css={{ height: 10, fontSize: 12, marginRight: Tokens.SPACING_1 }}
            placeholder="Search by category..."
          />
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
      </Flex>
      <Box css={{ flexGrow: 1, overflow: "hidden" }}>
        <ListTransactions transactions={transactions || []} />
      </Box>
      <Modal
        open={expandOpen}
        handleCloseModal={() => {
          setExpandOpen((val) => !val);
          setCategoryString("");
        }}
        css={{ width: "80vw", height: "80vh", maxWidth: 1000, fontSize: 11 }}
        padding="large"
      >
        <Flex justify="between">
          <Text variant="header">Transactions</Text>
          <Flex css={{ marginBottom: Tokens.SPACING_1 }}>
            <Input
              label="Category"
              name="category_input_2"
              onChange={(e) => setCategoryString(e.target.value)}
              variant="label-hidden"
              css={{
                height: 10,
                fontSize: 12,
                marginRight: Tokens.SPACING_1,
                alignSelf: "end",
              }}
              placeholder="Search by category..."
            />
          </Flex>
        </Flex>
        <ListTransactions transactions={transactions || []} />
        <br />
      </Modal>
    </Flex>
  );
}

export function ListTransactions(props: { transactions: Transaction[] }) {
  const { transactions } = props;
  return (
    <List
      css={{ height: "100%", overflowY: "auto" }}
      variant="borders"
      listItemBoxProps={{ padding: "small" }}
      items={transactions?.map((x, i) => ({
        key: i,
        children: (
          <Text variant="caption">
            {`Description: ${x.description} - Account: ${x.account}`}
            {` - Category: ${x.category} USD`}
            <strong>{` - Date: ${x.date.substring(0, 10)}`}</strong>
            <strong>{` - Amount: ${x.amount} USD`}</strong>
          </Text>
        ),
      }))}
    />
  );
}
