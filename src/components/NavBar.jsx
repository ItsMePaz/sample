import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Gome</Link>
        </li>
        <li>
          <Link to={"/About"}>About</Link>{" "}
        </li>
        <li>
          <Link to={"/Contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
