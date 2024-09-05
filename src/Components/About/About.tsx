import "./About.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { InfoCard } from "../"
import { takingSelfie } from "../../assets"

const About = () => {
  return (
    <div id="about" className="container-md about-section">
      <div className="panel d-flex justify-content-between align-items-center">
        <div className="about-text">
          <h2>How Does It Work?</h2>
          <p>
            Our platform uses advanced image analysis to detect your skin tone
            from a simple selfie. By applying cutting-edge algorithms, we
            identify whether your skin has warm, cool, or neutral undertones.
            Based on this, we generate a personalized color palette and
            recommend outfits from top retailers that best complement your
            complexion. It's a seamless blend of technology and style, helping
            you discover looks that make you feel confident and look great.
          </p>
        </div>
        <div className="about-card">
          <InfoCard
            image={takingSelfie}
            title="Find Your Perfect Fit In Only Three Steps!"
            subtitle="1. Take Or Upload A Selfie 2. Let The App Analyze Your Undertones 3. Voila! Pick Outfits By Your Preferred Style"
            textLocation="bottom"
          />
        </div>
      </div>
    </div>
  )
}

export default About
