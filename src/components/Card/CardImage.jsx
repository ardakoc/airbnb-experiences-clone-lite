import Image from '../../static/img/card-img.png'
import FavButton from './FavButton'

export default function CardImage() {
  return (
    <div className="card-img-wrapper">
      <img src={Image} className="card-img" />
      <FavButton />
    </div>
  )
}