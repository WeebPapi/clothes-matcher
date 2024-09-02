import { StrictMode } from "react"
import { RouterProvider } from "react-router-dom"
import { createRoot } from "react-dom/client"
import "./index.css"
import { router } from "./router.ts"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
