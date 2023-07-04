import FavButton from './FavButton'

export default function CardImage(props) {
  return (
    <div className="card-img-wrapper">
      <div className="card-img-wrapper1">
        <img src={props.img} className="card-img" />
        <FavButton />
      </div>
    </div>
  )
}