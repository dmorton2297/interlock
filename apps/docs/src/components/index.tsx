import { COLOR_BLACK, SPACING_2 } from "ui";
import React from "react";

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

export function RenderedResult(props: Props) {
  const { children } = props;
  return (
    <div>
      <p style={{ marginBottom: '0.5rem' }}>Rendered example 👇</p>
      <div
        style={{ padding: SPACING_2, outline: `1px solid ${COLOR_BLACK}`, borderRadius: 3 }}
      >
        {children}
      </div>
    </div>
  );
}
