import HeroTitle from "./HeroTitle"
import HeroText from "./HeroText"
import HeroAction from "./HeroAction"

export default function HeroDescription() {
  return (
    <div className="hero-description">
      <HeroTitle />
      <HeroText />
      <HeroAction />
    </div>
  )
}