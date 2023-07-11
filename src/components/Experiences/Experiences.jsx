import Carousel from "./Carousel"
import data from "../../data"

export default function Experiences() {
  return (
    <>
      <Carousel title={data[0].title} data={data[0].data} />
      <Carousel title={data[1].title} data={data[1].data} />
    </>
  )
}