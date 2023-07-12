import React from "react";
import "./Text.css";

interface TextProps {
  children?: React.ReactNode
  /**
   * @param  text display text (Required)
   */
  text?: string;
  /**
   * @param CSS overrides provided in-line. (Optional)
   */
  css?: React.CSSProperties;
  /**
   * @param classNames css classes. (optional)
   */
  className?: string;
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
  const { text, css, className = "", variant = "body", align = "left" } = props;
  const variantClassName = `interlock_text-${variant}`;
  const alignClassName = `interlock_text_align-${align}`;
  return (
    <span
      className={`interlock_text ${variantClassName} ${alignClassName} ${className}`}
      style={css}
    >
      {text || props.children}
    </span>
  );
}
