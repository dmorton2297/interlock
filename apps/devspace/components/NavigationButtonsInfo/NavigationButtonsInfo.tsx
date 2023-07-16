"use client";

import { Box, Flex, Text, Tokens } from "ui";

export function NavigationButtonInfo() {
  const common = {
    outline: "1 px solid black",
    boxShadow: "2px 2px",
    width: 30,
    height: 30,
    backgroundColor: Tokens.COLOR_WHITE,
    color: Tokens.COLOR_BLACK,
    top: "100%",
    alignSelf: "center",
  };
  return (
    <Flex
      padding="small"
      css={{ width: 80, height: 30, backgroundColor: Tokens.COLOR_GRAY, alignSelf: 'center'}}
      justify="between"
    >
      <Text variant="caption" css={{ alignSelf: "center" }}>
        Hotkey
      </Text>
      <Flex
        css={{
          ...common,
          borderRadius: 2,
        }}
        justify="center"
      >
        <Text css={{ justifySelf: "center", alignSelf: "center" }}>P</Text>
      </Flex>
    </Flex>
  );
}
