import React from "react";
import { BaseProps, ClickableProps } from "../../shared-props";

export type BoxProps = BaseProps<HTMLDivElement> &
  ClickableProps<HTMLDivElement>;

export function Box(props: BoxProps) {
  const { children, padding = "none", margin = "none", css } = props;
  const paddingClassName = `interlock_padding-${padding}`;
  const marginClassName = `interlock_margin-${margin}`;

  const classNames = `${paddingClassName} ${marginClassName} ${
    props.className || ""
  }`;
  return (
    <div
      ref={props.innerRef}
      className={classNames}
      style={css}
      onClick={props.onClick}
    >
      {children}
    </div>
  );
}
