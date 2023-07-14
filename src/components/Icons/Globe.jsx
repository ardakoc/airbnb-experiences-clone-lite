import Globe from '../../static/img/globe-icon.png'

export default function GlobeIcon(props) {
  return (
    <button className="nav-globe-icon-wrapper">
      <img src={Globe} width="19px;" className={props.section} />
    </button>
  )
}