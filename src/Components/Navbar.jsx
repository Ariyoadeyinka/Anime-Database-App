import { Link } from "react-router-dom";
import styles from "../Css/Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
      <a className={`navbar-brand ${styles.navbarBrand}`} href="#">
      MyAnime🍥
      </a>
      <button
        className={`navbar-toggler ${styles.navbarTogglerIcon}`}
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className={`nav-link ${styles.navLink}`} href="#">
              Favorites <i class="fa-solid fa-heart"></i>
            </a>
          </li>
        
          <li className="nav-item">
            <a className={`nav-link ${styles.navLink}`} href="#">
              Watch Later <i class="fa-regular fa-clock"></i>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className={`nav-link dropdown-toggle ${styles.dropdownToggle}`}
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              My Account
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="#">
                Sign up
              </a>
              <Link to="/login">
              <a className="dropdown-item" href="#">
                Log in
              </a>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
