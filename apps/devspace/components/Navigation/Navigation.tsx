"use client";

import { Box, Link, List, Modal, Text, Tokens } from "ui";
import "./Navigation.css";
import { useState } from "react";

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
    <button
      className="app-menu-trigger"
      onClick={() => setOpen((open) => !open)}
    >
      Navigation
    </button>
  );
}
