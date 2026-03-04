import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/author">
          <li>Authors</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}
export default Header;
