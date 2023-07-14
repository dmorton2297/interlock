import React from "react";
import { createPortal } from "react-dom";
import { Box } from "../Box";
import { BoxProps } from "../Box/Box";
import { Flex } from "../Flex";
import { Text } from "../Text";
import "./Modal.css";

export interface ModalProps extends BoxProps {
  open: boolean;
  handleCloseModal: () => void;
  className?: string;
}

export function Modal(props: ModalProps) {
  const { css, className = "" } = props;
  return props.open
    ? createPortal(
        <Box
          className={`interlock_modal_overlay`}
          onClick={props.handleCloseModal}
        >
          <Flex
            className={`interlock_modal ${className}`}
            direction="column"
            css={css}
            onClick={(e) => e.stopPropagation()}
          >
            {props.children}
            <Box className="interlock_modal-vertical-expand" />
            <Flex justify="end">
              <button onClick={props.handleCloseModal}>Close</button>
            </Flex>
          </Flex>
        </Box>,
        document.body
      )
    : null;
}
