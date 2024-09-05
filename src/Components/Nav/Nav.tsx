import { useEffect, useRef } from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Nav.css"
import { GiHamburgerMenu } from "react-icons/gi"

const Nav = () => {
  const navbarRef = useRef(null)

  //Function to make navbar gain a colored background and change text colors after it has been scrolled and become transparent when it hasnt
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
        <button
          className="navbar-toggler p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navLinks"
          aria-controls="navLinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <GiHamburgerMenu />
        </button>
        <div className="navbar-collapse collapse" id="navLinks">
          <div className="navbar-nav ms-auto">
            <a href="#" className="nav-link">
              <span>Home</span>
            </a>
            <a href="#about" className="nav-link">
              <span>About</span>
            </a>
            <a href="#try" className="nav-link">
              <span>Try It Out!</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
