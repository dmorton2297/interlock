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
  /**
   * @param align specifies how the text should be aligned
   */
  align?: "left" | "center" | "right";
}

/**
 * 
 * @param props - Text component props
 * @returns A text component
 */
export function Text(props: TextProps) {
  const { text, css, variant = "body", align = "left" } = props;
  const variantClassName = `interlock_text-${variant}`;
  const alignClassName = `interlock_text_align-${align}`;
  return (
    <span
      className={`interlock_text ${variantClassName} ${alignClassName}`}
      style={css}
    >
      {text}
    </span>
  );
}
