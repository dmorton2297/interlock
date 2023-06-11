import React from "react";
import { Box } from "../Box";
import { Tokens } from "../../design-tokens";
import { Flex } from "../Flex";
import "./List.css";

interface ListItemProps {
  key: string | number;
  children: string | React.ReactNode | React.ReactNode[];
}

interface ListProps {
  items?: ListItemProps[];
}

export function List(props: ListProps) {
  const { items = [] } = props;
  return (
    <ul className="interlock_list">
      {items.map((x) => (
        <li key={x.key}>
          <Flex>
            <Box
              css={{
                width: 10,
                height: 10,
                backgroundColor: Tokens.COLOR_GRAY,
              }}
              className="interlock_list-marker"
            />
            {x.children}
          </Flex>
        </li>
      ))}
    </ul>
  );
}
