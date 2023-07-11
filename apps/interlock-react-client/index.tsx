import React from 'react'
import { createRoot } from 'react-dom/client'
import { Playground } from './src/playground'

// Fetch the root container specified in index.html
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('app-root')!

// Create a DOM root on that root container 
const root = createRoot(container)

// Render React entrypoint in DOM
root.render(<Playground />)
