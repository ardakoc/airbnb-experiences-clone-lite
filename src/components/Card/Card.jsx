import '../../static/css/Card.css'
import CardImage from "./CardImage"
import CardDetail from "./CardDetail"

export default function Card(props) {
  return (
    <div className="card">
      <CardImage img={props.img} />
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