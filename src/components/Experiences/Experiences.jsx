import Carousel from "./Carousel"
import data from "../../data"

export default function Experiences() {
  return (
    <>
      <Carousel title="Plan a trip with help from local Hosts around the world" data={data} />
      <Carousel title="Best sellers" data={data} />
    </>
  )
}