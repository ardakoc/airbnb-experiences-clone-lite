import '../../static/css/Card.css'
import CardImage from "./CardImage"
import CardDetail from "./CardDetail"

export default function Card() {
  return (
    <div className="card">
      <CardImage />
      <CardDetail />
    </div>
  )
}