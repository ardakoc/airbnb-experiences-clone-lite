import '../../static/css/Carousel.css'
import ExperienceTitle from "./ExperienceTitle"
import Card from "../Card/Card"

export default function Carousel() {
  return (
    <div className="carousel">
      <ExperienceTitle />
      <div className="experiences">
        <Card />
        <Card />
      </div>
    </div>
  )
}