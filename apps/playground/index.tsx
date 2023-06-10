import React from 'react'
import { createRoot } from 'react-dom/client'
import { Playground } from './src/playground'
import "./theme.css"

const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(<Playground />)