import React, { useState } from "react";
import { Box, Flex, Input, List, Text } from "ui";
import { useTransactions } from "./useTransactions";

export function Transfers() {
  const [categoryString, setCategoryString] = useState<string>("");
  const { transfers } = useTransactions({
    categoryPartialSearch: categoryString,
  });

  return (
    <Flex direction="column" css={{ gap: 2, height: '100%' }}>
      <Text css={{ alignSelf: "end" }}>This months transfers</Text>
      <Box css={{ flexGrow: 1, overflow: 'hidden' }}>
        <List
          css={{ height: "100%", overflowY: "auto", marginTop: 0 }}
          variant="borders"
          listItemBoxProps={{ padding: "small" }}
          items={transfers?.map((x, i) => ({
            key: i,
            children: (
              <Box>
                <Text variant="caption">
                  {`Description: ${x.description} - Account: ${x.account}`}
                </Text>
                <br />
                <Text variant="caption">
                  {" "}
                  <strong>{`Amount: ${x.amount} USD`}</strong>
                </Text>
              </Box>
            ),
          }))}
        />
      </Box>
    </Flex>
  );
}
