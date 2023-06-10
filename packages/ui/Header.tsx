import React from 'react';

export const Header = ({ text, style }: { text: string, style?: React.CSSProperties }) => {
  return <h1 style={style}>{text}</h1>;
};
