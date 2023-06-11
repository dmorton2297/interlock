import { SectionContainer } from "../components/SectionContainer";
import { Box, COLOR_GRAY, Flex, Link, Text, Tokens } from "ui";
import "./layout.css";

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css" />
      </head>
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
              <SectionContainer className="interlock-docs_navigation">
                <strong><Text text="Docs finder" css={{ paddingBottom: Tokens.SPACING_2, textDecoration: 'underline' }} /></strong>
                <Link to="/text">Text</Link>
                <Link to="/box">Box</Link>
                <Link to="/flex">Flex</Link>
                <Link to="/link">Link</Link>
              </SectionContainer>
              <SectionContainer css={{ flexGrow: 1, height: '82.7vh', overflowY: 'auto' }}>
                <div className="mdx-container">
                  {children}
                </div>
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
