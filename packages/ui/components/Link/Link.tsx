import React from 'react';

interface Props {
  to: string,
  children: string | React.ReactNode | React.ReactNode[],
}

export function Link(props: Props) {
  return <a href={props.to}>{props.children}</a>
}