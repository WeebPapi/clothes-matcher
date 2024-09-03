import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Header.css"
import { InfoCard } from "../"
import { heroCard } from "../../assets"

const Header = () => {
  return (
    <div className="container-fluid header-container d-flex  justify-content-center align-items-center">
      <div className="header-card">
        <InfoCard
          title="Find Outfits"
          subtitle="Analyze Your Skin Tone And Undertones To Find What Colors Fit You
          Best, And Then Pick From A List Of Recommended Outfits In Those
          Colors!"
          image={heroCard}
          textLocation="bottom"
        />
        <h1>Pick The Best Outfits For You, Based On Science!</h1>
      </div>
    </div>
  )
}

export default Header
