import React from "react";
import { List, Text } from "ui";
import { BoxProps } from "ui/components/Box/Box";

const lorem =
  '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."';

const listData = [
  { key: 1, children: <Text text={lorem} /> },
  { key: 1, children: <Text text={lorem} /> },
  { key: 1, children: <Text text={lorem} /> },
];

const listItemConfig: BoxProps = {
  padding: "large",
};

export const Playground: React.FC = () => {
  return (
    <>
      <List
        variant="borders"
        items={listData}
      />
      <List
        items={listData}
      />
    </>
  );
};
