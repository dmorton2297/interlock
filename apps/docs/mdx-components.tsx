import { Link, Text } from "ui";
import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <Text variant="header">{children}</Text>,
    h2: ({ children }) => <Text variant="subheader">{children}</Text>,
    h3: ({ children }) => <Text variant="subheader">{children}</Text>,
    p: ({ children }) => <Text variant="body">{children}</Text>,
    a: (props) => <Link {...props} to={props.href || '#'}>{props.children}</Link>,
    ...components,
  };
}