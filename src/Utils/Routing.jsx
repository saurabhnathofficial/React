import { Routes, Route } from "react-router-dom"
import Home from "../Components/Route/Home"
import Gallery from "../Components/Route/Gallery"
import About from "../Components/Route/About"

const Routing = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default Routing