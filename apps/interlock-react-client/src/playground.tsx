import React from "react";
import { List, Text } from "ui";

export const Playground: React.FC = () => {
  return (
    <>
      <List items={[{ key: 1, children: <Text text="test" /> }]} />
    </>
  );
};
