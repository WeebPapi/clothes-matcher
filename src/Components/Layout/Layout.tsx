import { Outlet } from "react-router-dom"
import { Nav, Footer } from "../"

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
