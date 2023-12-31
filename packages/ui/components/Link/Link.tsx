import React from "react";
import "./Link.css";

interface LinkProps {
  /**
   * @param to the href for a the underlying
   * anchor tage
   */
  to: string;
  /**
   * The content you want to render as the children
   * of the link
   */
  children: string | React.ReactNode | React.ReactNode[];
  /**
   * css classnames
   */
  className?: string;
  /**
   * css inline styles
   */
  css?: React.CSSProperties;
}

export function Link(props: LinkProps) {
  const { className = "" } = props;
  return (
    <a
      className={`interlock_link ${className}`}
      style={props.css}
      href={props.to}
    >
      {props.children}
    </a>
  );
}
