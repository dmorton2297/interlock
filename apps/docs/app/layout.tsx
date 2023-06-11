import { SectionContainer } from "@/components/SectionContainer";
import { Box, COLOR_GRAY, Flex, Link, Text, Tokens } from "ui";
import "./layout.css";

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Box css={{ backgroundColor: COLOR_GRAY, height: "100vh" }}>
          <Flex direction="column" css={{ height: "100vh" }}>
            <Flex
              className="homepage-navigation"
              padding="large"
              justify="center"
            >
              <Text variant="subheader" text="Interlock" />
            </Flex>
            <Flex
              padding="large"
              justify="center"
              css={{ flexGrow: 1, backgroundColor: Tokens.COLOR_WHITE }}
            >
              <SectionContainer css={{ minWidth: 150 }}>
                <Link to="/text">Text</Link>
              </SectionContainer>
              <SectionContainer css={{ flexGrow: 1 }}>
                {children}
              </SectionContainer>
            </Flex>
            <Flex className="homepage-footer" justify="center" padding="small">
              <Text
                text="Maintained and developed by Interlock"
                variant="caption"
              />
            </Flex>
          </Flex>
        </Box>
      </body>
    </html>
  );
}
