import React from "react"
import "./InfoCard.css"

interface InfoCardProps {
  image: string
  title: string
  textLocation: "top" | "bottom"
  subtitle?: string
}

const InfoCard: React.FC<InfoCardProps> = ({
  image,
  title,
  textLocation = "bottom",
  subtitle,
}) => {
  return (
    <div
      className="infocard"
      style={{
        backgroundImage: `url(${image})`,
        justifyContent: textLocation === "bottom" ? "flex-end" : "flex-start",
      }}
    >
      <div className="infocard-text">
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
    </div>
  )
}

export default InfoCard
