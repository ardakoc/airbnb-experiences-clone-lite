import Image from '../../static/img/card-img.png'

export default function CardImage() {
  return (
    <div className="card-img-wrapper">
      <img src={Image} className="card-img" />
    </div>
  )
}