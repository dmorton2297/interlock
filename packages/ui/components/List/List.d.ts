import React from "react";
import "./List.css";
import { BoxProps } from "../Box/Box";
interface ListItemProps {
    /**
     * @param key identifies a particular list item
     */
    key: string | number;
    /**
     * @param children content that is rendered fo an item
     */
    children: string | React.ReactNode | React.ReactNode[];
}
interface ListProps extends BoxProps {
    /**
     * @param items Items to display in the list
     */
    items?: ListItemProps[];
    /**
     * @param listItemBoxProps Boxprops that will be applied to each list items container.
     */
    listItemBoxProps?: BoxProps;
    /**
     * @param variant specifies design vaiant
     */
    variant?: 'markers' | 'borders' | 'noformat';
}
export declare function List(props: ListProps): React.JSX.Element;
export {};
//# sourceMappingURL=List.d.ts.map