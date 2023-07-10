import { useState, useEffect } from 'react'
import '../../static/css/Card.css'
import CardImage from "./CardImage"
import CardDetail from "./CardDetail"

export default function Card(props) {
  const [over, setOver] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if(currentIndex === 2) {
        setCurrentIndex(0)
      }
      else {
        setCurrentIndex(currentIndex + 1)
      }
    }, 2500)
    
    return () => clearInterval(intervalId)
  }, [currentIndex])

  const handleMouseOver = () => {
    setOver(true)
    setCurrentIndex(0)
  }

  const handleMouseOut = () => {
    setOver(false)
    setCurrentIndex(0)
  }

  return (
    <div className="card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <CardImage img={over ? props.gallery[currentIndex] : props.img} />
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