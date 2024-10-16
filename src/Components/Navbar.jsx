import { Link } from "react-router-dom";
import styles from "../Css/Navbar.module.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();  

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");  
    } catch {
      console.log("failed to logout");
    }
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
      <Link to="/" className={`navbar-brand ${styles.navbarBrand}`} href="#">
        MyAnime🍥
      </Link>
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
              Favorites <i className="fa-solid fa-heart"></i>
            </a>
          </li>

          <li className="nav-item">
            <a className={`nav-link ${styles.navLink}`} href="#">
              Watch Later <i className="fa-regular fa-clock"></i>
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
              <Link to="/update-profile">
                <a className="dropdown-item" href="#">
                  My Profile
                </a>
              </Link>

              <Link to="/login">
                <button className="dropdown-item" onClick={handleLogout}>
                  Log Out
                </button>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
