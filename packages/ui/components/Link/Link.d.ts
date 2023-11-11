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
export declare function Link(props: LinkProps): React.JSX.Element;
export {};
//# sourceMappingURL=Link.d.ts.map