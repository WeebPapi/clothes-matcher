import { Outlet } from "react-router-dom"
import { Nav, Footer } from "../"

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
