"use client";

import { Box, Button, Link, List, Modal, Text, Tokens } from "ui";
import "./Navigation.css";
import { useEffect, useState } from "react";

export const NAVIGATION_LINKS = [
  {
    key: "12 16 2020 ApolloClient React demo",
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

  return open ? (
    <Modal
      open={open}
      handleCloseModal={() => setOpen((open) => !open)}
      className="app-navigation"
    >
      <Box padding="small">
        <Text
          variant="subheader"
          css={{
            textAlign: "center",
            textDecoration: "underline",
          }}
        >
          2020
        </Text>
        <List
          listItemBoxProps={{ padding: "small" }}
          items={NAVIGATION_LINKS}
        />
      </Box>
    </Modal>
  ) : (
    <Button
      className="app-menu-trigger"
      onClick={() => setOpen((open) => !open)}
      css={{ zIndex: 2 }}
    >
      <MenuIcon />
    </Button>
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
