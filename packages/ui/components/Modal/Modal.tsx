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
}

export function Modal(props: ModalProps) {
  const { css } = props;
  return props.open ? createPortal(
    <Box className="interlock_modal_overlay">
      <Flex className="interlock_modal" direction="column" css={css}>
        <Text>This is a test</Text>
        <Box className="interlock_modal-vertical-expand" />
        <Flex justify="end">
          <button onClick={props.handleCloseModal}>Close</button>
        </Flex>
      </Flex>
    </Box>,
    document.body
  ) : null;
}
