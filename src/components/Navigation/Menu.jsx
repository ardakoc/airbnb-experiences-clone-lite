import GlobeIcon from "../Icons/Globe"
import Profile from "./Profile"

export default function Menu() {
  return (
    <div className="nav-menu">
      <button className="nav-btn">Airbnb your home</button>
      <GlobeIcon />
      <Profile />
    </div>
  )
}