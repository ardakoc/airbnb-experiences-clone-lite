import "../../static/css/Carousel.css"
import ExperiencesTitle from "./ExperiencesTitle"
import Card from "../Card/Card"
import data from "../../data"

export default function Carousel() {
  const experiences = data.map(experience => 
    <Card 
      img={experience.img}
      rating={experience.review.rating}
      voteCount={experience.review.voteCount}
      location={experience.location}
      title={experience.title}
      price={experience.price}
    />
  )
  return (    
    <div className="carousel">
      <ExperiencesTitle />
      <div className="experiences">
        {experiences}
      </div>
    </div>
  )
}