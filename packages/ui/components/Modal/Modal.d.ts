import React from "react";
import { BoxProps } from "../Box/Box";
import "./Modal.css";
export interface ModalProps extends BoxProps {
    open: boolean;
    handleCloseModal: () => void;
    className?: string;
}
export declare function Modal(props: ModalProps): React.ReactPortal | null;
//# sourceMappingURL=Modal.d.ts.map