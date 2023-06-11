import React, { ReactNode } from "react";
import { BoxProps, Box } from "../Box/Box";
import "./Flex.css";

export interface FlexProps extends BoxProps {
  /**
   * @param children children that are passed into the box
   */
  justify?: "between" | "around" | "center" | "end" | "start";
  /**
   * @param direction direction the flexbox should operate in
   */
  direction?: "row" | "column";
}

export function Flex(props: FlexProps) {
  const { justify = "start", direction = "row" } = props;
  const justifyClassName = `interlock_flex_justify-${justify}`;
  const directionClassName = `interlock_flex_direction-${direction}`;
  return (
    <Box
      {...props}
      className={`interlock_flex ${justifyClassName} ${directionClassName} ${
        props.className || ""
      }`}
    />
  );
}
