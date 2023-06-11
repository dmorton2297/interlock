import React from 'react';
import "./Link.css";

interface Props {
  to: string,
  children: string | React.ReactNode | React.ReactNode[],
}

export function Link(props: Props) {
  return <a className="interlock_link" href={props.to}>{props.children}</a>
}