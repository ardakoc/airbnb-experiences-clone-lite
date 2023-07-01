import '../../static/css/Carousel.css'
import ExperienceTitle from "./ExperienceTitle"
import Card from "../Card/Card"
import Image1 from '../../static/img/card-img.png'
import Image2 from '../../static/img/card-img1.png'

export default function Carousel() {
  return (
    <div className="carousel">
      <ExperienceTitle />
      <div className="experiences">
        <Card 
          img={Image1}
          rating={5.0}
          voteCount={2}
          location="Japan"
          title="Learn & Plan a Kyoto trip with local advisor Yuko"
          price={8}
        />
        <Card 
          img={Image2}
          rating={5.0}
          voteCount={3}
          location="Japan"
          title="Plan the perfect Customised Japan Trip with Local Expert"
          price={8}
        />
      </div>
    </div>
  )
}