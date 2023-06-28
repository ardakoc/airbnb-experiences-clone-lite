import '../../static/css/Hero.css'
import PhotoGrid from "./PhotoGrid"
import HeroDescription from './HeroDescription'
import HeroAction from './HeroAction'

export default function Hero() {
  return (
    <div className="hero">
      <PhotoGrid />
      <HeroDescription />
    </div>
  )
}