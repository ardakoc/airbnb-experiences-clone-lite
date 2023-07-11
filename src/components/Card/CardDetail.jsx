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
        <Rating rating={props.item.review.rating} voteCount={props.item.review.voteCount} />
        <Seperator />
        <Location location={props.item.location} />
      </div>
      <CardTitle title={props.item.title} />
      <Price price={props.item.price} />
    </>
  )
}