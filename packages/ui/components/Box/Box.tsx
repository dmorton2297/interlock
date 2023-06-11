import React, { ReactNode } from "react";
import "./Box.css";

export interface BoxProps {
  /**
   * @param children children that are passed into the box
   */
  children: React.ReactNode | ReactNode[]
  /**
   * @param  padding padding setting for the box (Optional)
   */
  padding?: 'small' | 'medium' | 'large' | 'x-large' | 'none'
  /**
   * @param  margin padding setting for the box (Optional)
   */
  margin?: 'small' | 'medium' | 'large' | 'x-large' | 'none'
  /**
   * @param CSS overrides provided in-line. (Optional)
   */
  css?: React.CSSProperties;
  className?: string;
}

export function Box(props: BoxProps) {
  const { children, padding = 'none', margin = 'none', css } = props;
  const paddingClassName = `interlock_box_padding-${padding}`;
  const marginClassName = `interlock_box_margin-${margin}`;

  const classNames = `${paddingClassName} ${marginClassName} ${props.className || ''}`
  return (
    <div className={classNames} style={css}>{children}</div>
  );
}
