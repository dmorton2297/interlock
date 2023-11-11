import React from "react";
import "./Text.css";
interface TextProps {
    children?: React.ReactNode;
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
export declare function Text(props: TextProps): React.JSX.Element;
export {};
//# sourceMappingURL=Text.d.ts.map