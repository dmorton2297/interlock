import React, { useEffect } from "react";

/**
 * Redirect to the documentation site
 */
export default function Home(): JSX.Element {
  useEffect(() => {
    window.location.pathname = '/docs/react-interlock/About'
  })
  return <></>
}
