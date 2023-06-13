import React, { InputHTMLAttributes } from "react";
import { Text } from "../Text";
import "./Input.css";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "style"> {
  /**
   * Label for input
   */
  label: string;
  /**
   * Input variant
   */
  variant?: "labelled" | "label-hidden";
  /**
   * Input type
   */
  type?: "number" | "string";
  /**
   * Inline input overrides
   */
  css?: React.CSSProperties;
}

export function Input(props: InputProps) {
  const { variant = "labelled" } = props;
  return (
    <>
      {variant === "labelled" && (
        <label>
          <Text variant="caption">{props.label}</Text>
        </label>
      )}
      <input
        {...props}
        aria-label={props.label}
        style={props.css}
        className={`interlock_input ${props.className || ""}`}
      />
    </>
  );
}
