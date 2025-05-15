import { Link } from "react-router-dom";
import {BiCameraMovie, BiSerachAlt2} from "react-icons/bi";

const Navbar = () => {
  return (
    <nav id='navbar'>
        <h2>
            <Link to="/"><BiCameraMovie /> MoviesLib</Link>
        </h2>
         <form>
            <input type="text" placeholder="Busque um filme" />
            <button type="submit"></button>
            <BiSearchAlt2></BiSearchAlt2>
         </form>
    </nav>
  )
}

export default Navbar