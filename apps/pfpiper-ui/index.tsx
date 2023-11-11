import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Trends } from "./src/trends";
import { Budget } from "./src/budget";

localStorage.removeItem("pfpiper-ui_transactions");
// Fetch the root container specified in index.html
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById("app-root")!;

// Create a DOM root on that root container
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Trends />,
  },
  {
    path: "/budget",
    element: <Budget />
  }
]);

// Render React entrypoint in DOM
root.render(<RouterProvider router={router} />);
