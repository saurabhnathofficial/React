import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Nav