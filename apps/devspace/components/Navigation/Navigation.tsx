"use client";

import { Box, Button, Flex, Link, List, Modal, Text, Tokens } from "ui";
import "./Navigation.css";
import { useEffect, useRef, useState } from "react";

export const NAVIGATION_LINKS = [
  {
    key: "11 13 2023 New beginnings",
    children: (
      <Link to="/new-beginnings">11/13/2023 A start from scratch</Link>
    ),
  },
  {
    key: "12 16 2020 ApolloClient react demo",
    children: (
      <Link to="/graphql-react">12/16/2020 ApolloClient React demo</Link>
    ),
  },
  {
    key: "11 17 2020 Original devspace website",
    children: (
      <Link to="/og-devspace">11/17/2020 Original devspace website</Link>
    ),
  },
  {
    key: "11 15 2020 Five key learnings from 2020",
    children: (
      <Link to="/five-key-learnings-2020">
        11/15/2020 Five key learnings from 2020
      </Link>
    ),
  },
];

export function AppNavigation() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Navigation keybindings
  useEffect(() => {
    const currButton = buttonRef.current;
    const currModal = modalRef.current;

    if (currButton || currModal) {
      const keyListen = (e: KeyboardEvent) => {
        const appContent = document.getElementsByClassName("app-content")[0];
        if (e.key === "p") setOpen((open) => !open);
        if (e.key === "j") appContent.scroll({ top: appContent.scrollTop + 30 })
        if (e.key === "k") appContent.scroll({ top: appContent.scrollTop - 30 });
        if (e.key === "h") window.location.href = '/'
      };
      document.addEventListener("keypress", keyListen);
      return () => {
        document.removeEventListener("keypress", keyListen);
      };
    }
  });

  return open ? (
    <Modal
      open={open}
      handleCloseModal={() => setOpen((open) => !open)}
      className="app-navigation"
      innerRef={modalRef}
      css={{ backgroundColor: "#131313" }}
      closeButtonCSS={{ margin: Tokens.SPACING_1, outline: `1px solid white`, background: Tokens.COLOR_BLACK, color: Tokens.COLOR_WHITE }}
    >
      <Box padding="small">
        <Text
          variant="header"
          css={{
            textAlign: "center",
            color: 'whitesmoke'
          }}
        >
          Posts
        </Text>
        <List
          listItemBoxProps={{ padding: "small" }}
          items={NAVIGATION_LINKS}
        />
      </Box>
    </Modal>
  ) : (
    <Flex>
      <Button
        className="app-menu-trigger"
        onClick={() => setOpen((open) => !open)}
        css={{ zIndex: 2 }}
        innerRef={buttonRef}
      >
        <MenuIcon />
      </Button>
    </Flex>
  );
}

function MenuIcon() {
  return (
    <Box css={{ alignSelf: "center", cursor: "pointer" }}>
      <svg
        width="22"
        height="6"
        viewBox="0 0 22 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="6" height="6" fill="white" />
        <rect x="16" width="6" height="6" fill="white" />
        <rect x="8" width="6" height="6" fill="white" />
      </svg>
    </Box>
  );
}
