import "../../static/css/Carousel.css"
import ExperiencesTitle from "./ExperiencesTitle"
import Card from "../Card/Card"

export default function Carousel(props) {
  const experiences = props.data.map(experience => 
    <Card
      key={experience.id}
      img={experience.coverImg}
      gallery={experience.gallery}
      rating={experience.review.rating}
      voteCount={experience.review.voteCount}
      location={experience.location}
      title={experience.title}
      price={experience.price}
    />
  )
  return (    
    <div className="carousel">
      <ExperiencesTitle title={props.title} />
      <div className="experiences">
        {experiences}
      </div>
    </div>
  )
}