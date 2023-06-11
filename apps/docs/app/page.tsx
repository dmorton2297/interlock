import { Tokens, Text, Link } from "ui";
import { SectionContainer } from "../components/SectionContainer";

export default function HomePage() {
  return (
    <>
      <Text variant="subheader" text="Building dead simple react components." />
      <Text
        text="interlock-react is is a themeable, bare bones component library. 
          This library is intentional basic, to reinforce the difference between what should be a feature
           of a component library, and what should be an example composition of that component library."
        css={{
          paddingBottom: Tokens.SPACING_3,
        }}
      />
      <hr />
      <Text variant="subheader" text="Project Goals" />
      <Text
        text="I started to develop interlock-react as a desire to build a design-system
          for a larger ambition to creating my own stack. The main goals of this initiative are
        to focus on minimzing dependencies, provide a good developer experience, and to build sta[able
          and up to date software."
        css={{
          paddingBottom: Tokens.SPACING_3,
        }}
      />
    </>
  );
}
