import React from "react";
import { createPortal } from "react-dom";
import { Box } from "../Box";
import { BoxProps } from "../Box/Box";
import { Flex } from "../Flex";
import "./Modal.css";
import { Button } from "../Button";

export interface ModalProps extends BoxProps {
  open: boolean;
  handleCloseModal: () => void;
  className?: string;
  closeButtonCSS?: React.CSSProperties;
}

export function Modal(props: ModalProps) {
  const { css, padding, className = "" } = props;
  console.log(padding);

  return props.open
    ? createPortal(
        <Box
          className={`interlock_modal_overlay`}
          onClick={props.handleCloseModal}
          innerRef={props.innerRef}
        >
          <Flex
            className={`interlock_modal ${className}`}
            direction="column"
            css={css}
            padding={props.padding}
            onClick={(e) => e.stopPropagation()}
          >
            {props.children}
            <Box className="interlock_modal-vertical-expand" />
            <Flex justify="end">
              <Button
                className="interlock_modal-close-button"
                onClick={props.handleCloseModal}
                css={props.closeButtonCSS}
              >
                Close
              </Button>
            </Flex>
          </Flex>
        </Box>,
        document.body
      )
    : null;
}
