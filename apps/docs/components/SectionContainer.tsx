import { Box, Tokens } from "ui";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  css?: React.CSSProperties;
}

export function SectionContainer(props: Props) {
  return (
    <Box
      padding="medium"
      css={{
        border: `1px solid ${Tokens.COLOR_GRAY}`,
        margin: `0 ${Tokens.SPACING_0}`,
        ...props.css
      }}
    >
      {props.children}
    </Box>
  );
}
