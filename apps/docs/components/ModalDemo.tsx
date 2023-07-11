"use client"
import React, { useState } from "react";
import { Box, Modal } from "ui";

export function ModalDemo() {
  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Modal
        handleCloseModal={handleCloseModal}
        open={open}
        css={{ width: 300, height: 300 }}
      />
      <button onClick={() => setOpen(true)}>Click me to open modal</button>
    </Box>
  );
};
