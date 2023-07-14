import { Box, Tokens, Text, Link, Flex } from "ui";
import "./layout.css";
import type { Metadata } from "next";
import { AppNavigation } from "../components/Navigation";

export const metadata: Metadata = {
  title: "devspace blog",
  description: "Dan Morton's personal blogging platform",
};

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
          <Box className="header-text">
            <Link to="/" className="header-text">
              <Text variant="header" css={{ alignSelf: "center" }}>
                devspace
              </Text>
            </Link>
            <AppNavigation />
          </Box>

          <Box className="app-content">{children}</Box>
        </Box>
      </body>
    </html>
  );
}
