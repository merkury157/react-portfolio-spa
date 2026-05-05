import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="nav">
      <Link to="/about">Про мене</Link>
      <Link to="/my-city">Моє місто</Link>
      <Link to="/my-future">Мій розвиток</Link>
    </nav>
  );
}

export default Header;