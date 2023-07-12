import { Box, Tokens, Text, Link, List } from "ui";
import "./layout.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "devspace blog",
  description: "Dan Morton's personal blogging platform",
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        />
      </head>
      <body>
        <Box className="app-container">
          <Link to="/" className="header-text">
            <Text variant="header" css={{ alignSelf: "center" }}>
              devspace
            </Text>
          </Link>
          <Box className="app-navigation">
            <Box padding="small">
              <Text
                variant="subheader"
                css={{ textAlign: "center", textDecoration: "underline" }}
              >
                2020
              </Text>
              <List
                listItemBoxProps={{ padding: "small" }}
                items={NAVIGATION_LINKS}
              />
            </Box>
          </Box>
          <Box className="app-content">{children}</Box>
        </Box>
      </body>
    </html>
  );
}
