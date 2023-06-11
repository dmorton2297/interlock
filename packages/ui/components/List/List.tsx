import React from "react";
import { Box } from "../Box";
import { Flex } from "../Flex";
import "./List.css";
import { BoxProps } from "../Box/Box";

interface ListItemProps {
  /**
   * @param key identifies a particular list item
   */
  key: string | number;
  /**
   * @param children content that is rendered fo an item
   */
  children: string | React.ReactNode | React.ReactNode[];
}

interface ListProps extends BoxProps {
  /**
   * @param items Items to display in the list
   */
  items?: ListItemProps[];
  /**
   * @param listItemBoxProps Boxprops that will be applied to each list items container.
   */
  listItemBoxProps?: BoxProps;
  /**
   * @param variant specifies design vaiant
   */
  variant?: 'markers' | 'borders' | 'noformat'
}

export function List(props: ListProps) {
  const {
    items = [],
    variant = 'markers',
    listItemBoxProps,
    ...boxProps
  } = props;
  const showBordersClass = variant === 'borders' ? "interlock_list-show-borders" : "";
  return (
    <ul className={`interlock_list ${showBordersClass}`}>
      <Box {...boxProps}>
        {items.map((x) => (
          <li key={x.key}>
            <Flex
              {...listItemBoxProps}
              className={`interlock_list_item ${showBordersClass} ${
                listItemBoxProps?.className || ""
              }`}
            >
              {variant === 'markers' && <Box className="interlock_list_marker" />}
              {x.children}
            </Flex>
          </li>
        ))}
      </Box>
    </ul>
  );
}
