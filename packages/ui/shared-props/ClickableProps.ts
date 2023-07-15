import { MouseEventHandler } from "react";

export interface ClickableProps<T> {
  /**
   * @param onClick onClick handler
   */
  onClick?: MouseEventHandler<T>;
}
