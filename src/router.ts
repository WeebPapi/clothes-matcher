import { createBrowserRouter } from "react-router-dom"
import { HomePage, OutfitPage } from "./Pages"
import { Layout } from "./Components"
import React from "react"

export const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(Layout),
    children: [
      {
        path: "/",
        element: React.createElement(HomePage),
      },
      {
        path: "/outfit/:outfitId",
        element: React.createElement(OutfitPage),
      },
    ],
  },
])
