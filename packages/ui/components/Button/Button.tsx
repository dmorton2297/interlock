import React from "react";
import { BaseProps, ClickableProps } from "../../shared-props";
import "./Button.css";

type ButtonProps = BaseProps<HTMLButtonElement> &
  ClickableProps<HTMLButtonElement>;

// TODO: Padding and margin classnames
// can be consolidated with Box.ts
export function Button(props: ButtonProps) {
  const { children, padding = "none", margin = "none", css } = props;
  const paddingClassName = `interlock_padding-${padding}`;
  const marginClassName = `interlock_margin-${margin}`;

  const classNames = `interlock_button ${paddingClassName} ${marginClassName} ${
    props.className || ""
  }`;
  return (
    <button
      ref={props.innerRef}
      onClick={props.onClick}
      className={classNames}
      style={css}
    >
      {children}
    </button>
  );
}
