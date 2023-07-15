import { ReactNode } from "react";

export interface BaseProps {
  /**
   * @param children children that are passed into the box
   */
  children?: React.ReactNode | ReactNode[];
  /**
   * @param  padding padding setting for the box (Optional)
   */
  padding?: "small" | "medium" | "large" | "x-large" | "none";
  /**
   * @param  margin padding setting for the box (Optional)
   */
  margin?: "small" | "medium" | "large" | "x-large" | "none";
  /**
   * @param CSS overrides provided in-line. (Optional)
   */
  css?: React.CSSProperties;
  /**
   * @param className css classnames
   */
  className?: string;
}
