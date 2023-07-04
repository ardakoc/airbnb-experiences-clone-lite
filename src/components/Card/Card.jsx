import { useState } from 'react'
import '../../static/css/Card.css'
import CardImage from "./CardImage"
import CardDetail from "./CardDetail"

export default function Card(props) {
  const [over, setOver] = useState(false);

  const handleMouseOver = () => {
    setOver(true)
  }

  const handleMouseOut = () => {
    setOver(false)
  }
  return (
    <div className="card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} over={over}>
      <CardImage img={over ? props.gallery : props.img} />
      <CardDetail 
        rating={props.rating}
        voteCount={props.voteCount}
        location={props.location}
        title={props.title}
        price={props.price}
      />
    </div>
  )
}