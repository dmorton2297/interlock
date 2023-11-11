import React, { InputHTMLAttributes } from "react";
import "./Input.css";
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "style"> {
    /**
     * Label for input
     */
    label: string;
    /**
     * Name passed to underlying input
     */
    name: string;
    /**
     * Input variant
     */
    variant?: "labelled" | "label-hidden";
    /**
     * Input type
     */
    type?: "number" | "string";
    /**
     * Inline input overrides
     */
    css?: React.CSSProperties;
}
export declare function Input(props: InputProps): React.JSX.Element;
export {};
//# sourceMappingURL=Input.d.ts.map