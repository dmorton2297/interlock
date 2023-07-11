import { SectionContainer } from "../components/SectionContainer";
import { Box, Flex, Link, Text, Tokens } from "ui";
import "./layout.css";

export default function DocumentationLayout({
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
      <body style={{ margin: 0 }} className="interlock_docs_body">
        <Box css={{ height: "100vh" }}>
          <Flex
            direction="column"
            css={{ minHeight: `calc(100% - ${Tokens.SPACING_3}` }}
          >
            <Flex
              className="homepage-navigation"
              padding="large"
              justify="center"
            >
              <Link to="/">
                <Text variant="subheader" text="Interlock" />
              </Link>
            </Flex>
            <Flex
              justify="center"
              css={{ flexGrow: 1, backgroundColor: Tokens.COLOR_WHITE, maxWidth: 1800, width: '100%', alignSelf: 'center', padding: `${Tokens.SPACING_1} 0` }}
            >
              <SectionContainer className="interlock-docs_navigation">
                <strong>
                  <Text
                    text="Primitives"
                    css={{
                      paddingBottom: Tokens.SPACING_2,
                      textDecoration: "underline",
                    }}
                  />
                </strong>
                <Link to="/text">Text</Link>
                <Link to="/box">Box</Link>
                <Link to="/flex">Flex</Link>
                <Link to="/link">Link</Link>
                <Link to="/modal">Modal</Link>
                <strong>
                  <Text
                    text="Data input"
                    css={{
                      paddingBottom: Tokens.SPACING_2,
                      textDecoration: "underline",
                    }}
                  />
                </strong>
                <Link to="/input">Input</Link>
                <strong>
                  <Text
                    text="Data viz"
                    css={{
                      paddingBottom: Tokens.SPACING_2,
                      textDecoration: "underline",
                    }}
                  />
                </strong>
                <Link to="/list">List</Link>
              </SectionContainer>
              <SectionContainer css={{ flexGrow: 1, overflowY: "auto" }}>
                <div className="mdx-container">{children}</div>
              </SectionContainer>
            </Flex>
          </Flex>
          <Flex className="homepage-footer" justify="center">
            <Link to="https://github.com/dmorton2297/interlock/tree/main/packages/ui">
              <Text text="Github" />
            </Link>
          </Flex>
        </Box>
      </body>
    </html>
  );
}
