import { useEffect, useRef } from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Nav.css"

const Nav = () => {
  const navbarRef = useRef(null)

  //Function to make navbar gain a colored background after it has been scrolled and become transparent when it hasnt
  const handleNavScroll: () => void = () => {
    if (window.scrollY >= 76 && navbarRef.current) {
      ;(navbarRef.current as HTMLElement).classList.add("navbar-scrolled")
    } else if (window.scrollY < 76 && navbarRef.current) {
      ;(navbarRef.current as HTMLElement).classList.remove("navbar-scrolled")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleNavScroll)
    return () => {
      window.removeEventListener("scroll", handleNavScroll)
    }
  }, [])

  return (
    <nav ref={navbarRef} className="navbar navbar-expand-md nav-bg fixed-top">
      <div className="container-fluid">
        <div className="navbar-logo">
          <a href="#" className="navbar-brand">
            <img
              src="https://em-content.zobj.net/source/apple/237/man-in-business-suit-levitating_1f574.png"
              alt="site-logo"
            />
          </a>
          <p>OutfitChroma</p>
        </div>
        <div className="navbar-nav"></div>
      </div>
    </nav>
  )
}

export default Nav
