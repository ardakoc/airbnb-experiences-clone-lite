import Star from "../Icons/Star"
import Rating from "./Rating"
import Seperator from "./Seperator"
import Location from "./Location"
import CardTitle from "./CardTitle"
import Price from "./Price"

export default function CardDetail() {
  return (
    <>
      <div className="card-detail-info">
        <Star />
        <Rating />
        <Seperator />
        <Location />
      </div>
      <CardTitle />
      <Price />
    </>
  )
}