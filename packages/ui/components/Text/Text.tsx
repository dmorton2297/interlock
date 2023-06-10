import React from "react";
import "./Text.css";

interface TextProps {
  /**
   * @param  text display text (Required)
   */
  text: string;
  /**
   * @param CSS overrides provided in-line. (Optional)
   */
  css?: React.CSSProperties;
  /**
   * @param Variant specifies text variant.
   * Options are header, subheader, body or caption
   */
  variant?: "header" | "subheader" | "body" | "caption";
}

export function Text(props: TextProps) {
  const { text, css, variant = "body" } = props;
  const variantClassName = `interlock_text-${variant}`;
  return (
    <span className={`interlock_text ${variantClassName}`} style={css}>
      {text}
    </span>
  );
}
