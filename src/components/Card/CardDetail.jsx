import Star from "../Icons/Star"
import Rating from "./Rating"
import Seperator from "./Seperator"
import Location from "./Location"
import CardTitle from "./CardTitle"
import Price from "./Price"

export default function CardDetail(props) {
  return (
    <>
      <div className="card-detail-info">
        <Star />
        <Rating rating={props.rating} voteCount={props.voteCount} />
        <Seperator />
        <Location location={props.location} />
      </div>
      <CardTitle title={props.title} />
      <Price price={props.price} />
    </>
  )
}