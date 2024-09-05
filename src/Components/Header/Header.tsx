import { useEffect, useRef } from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Header.css"

const Header = () => {
  const headTextRef = useRef(null)

  //Function to add animation to headtext upon scroll and to remove them when scrolled back up
  const handleHeaderScroll: () => void = () => {
    if (window.scrollY >= 76 && headTextRef.current) {
      ;(headTextRef.current as HTMLElement).classList.add("header-scrolled")
    } else if (window.scrollY < 76 && headTextRef.current) {
      ;(headTextRef.current as HTMLElement).classList.remove("header-scrolled")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleHeaderScroll)

    return () => {
      window.removeEventListener("scroll", handleHeaderScroll)
    }
  }, [])
  return (
    <div className="container-fluid header-container d-flex  justify-content-center align-items-center">
      <div className="header-card">
        <h1>
          Pick The Best Outfits For You,{" "}
          <span ref={headTextRef}>Based On Science!</span>
        </h1>
        <div className="header-buttons d-flex justify-content-start align-items-center">
          <button type="button" className="btn btn-gray me-4">
            How Does It Work?
          </button>
          <button type="button" className="btn btn-darkgray">
            Try It Out!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
