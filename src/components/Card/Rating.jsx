export default function Rating(props) {
  return <p>{Number(props.rating).toFixed(1)} <span style={{ color: "#717171" }}>({props.voteCount})</span></p>
}