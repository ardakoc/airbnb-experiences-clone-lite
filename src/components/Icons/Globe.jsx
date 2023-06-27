import Globe from '../../static/img/globe-icon.png'

export default function GlobeIcon() {
  return (
    <button className="nav-globe-icon-wrapper">
      <img src={Globe} width="18px;" className="nav-globe-icon" />
    </button>
  )
}