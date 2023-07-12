import { Box, Tokens, Text, Link } from "ui";
import "./layout.css";
import type { Metadata } from "next";

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
      <body>
        <Box className="app-container">
          <Link to="/" className="header-text">
            <Text variant="header" css={{ alignSelf: "center" }}>
              devspace
            </Text>
          </Link>
          <Box className="app-navigation" />
          <Box className="app-content">{children}</Box>
        </Box>
      </body>
    </html>
  );
}
