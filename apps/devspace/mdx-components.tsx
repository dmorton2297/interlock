import { Link, List, Text } from "ui";
import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  const config: MDXComponents = {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <Text css={{ fontSize: '2.5rem', fontWeight: 'bolder' }} variant="header">{children}</Text>,
    h2: ({ children }) => <Text css={{ fontSize: '2rem', fontStyle: 'italic' }}variant="subheader">{children}</Text>,
    h3: ({ children }) => <Text variant="subheader">{children}</Text>,
    p: ({ children }) => <Text css={{ fontSize: '1.2rem' }} variant="body">{children}</Text>,
    a: (props) => <Link {...props} css={{ fontSize: '1.2rem' }} to={props.href || '#'}>{props.children}</Link>,
    ...components,
  }
  return config;
}