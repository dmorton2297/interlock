import React from "react";
import { BoxProps } from "../Box/Box";
import "./Flex.css";
export interface FlexProps extends BoxProps {
    /**
     * @param children children that are passed into the box
     */
    justify?: "between" | "around" | "center" | "end" | "start";
    /**
     * @param direction direction the flexbox should operate in
     */
    direction?: "row" | "column";
}
export declare function Flex(props: FlexProps): React.JSX.Element;
//# sourceMappingURL=Flex.d.ts.map