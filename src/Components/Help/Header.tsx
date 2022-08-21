import { Link } from "react-router-dom";

export const Header:React.FC = () => (
  <header>
    <nav>
      <div className="container nav-wrapper">
        <Link to="/hotlineShop" className="left brand-logo">Market</Link>
        <ul id="nav-mobile" className="right">
          <li><Link to="/hotlineShop/products">Products</Link></li>
          <li><Link to="/hotlineShop/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  </header>
)

