import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
function Header() {
  const cartItems = useSelector((store) => store.cart.items);
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
        <li>{cartItems.length} items in cart</li>
      </ul>
    </div>
  );
}
export default Header;
