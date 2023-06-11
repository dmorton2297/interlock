import { Box, Tokens, Text } from "ui";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export function RenderedResults(props: Props) {
  return (
    <>
      <Text text="Rendered output" />
      <Box
        css={{
          border: `1px solid ${Tokens.COLOR_BLACK}`,
          padding: Tokens.SPACING_1,
          boxShadow: `3px 2px ${Tokens.COLOR_GRAY}`
        }}
      >
        {props.children}
      </Box>
    </>
  );
}
