import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import classes from "./styles/Header.module.css";
export default function Header() {
  const [menu, setMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  function menuToggle() {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }
  function menuToggleMobile() {
    if (window.innerWidth < 768) {
      menuToggle();
    }
  }
  function stickyHeader() {
    if (document.documentElement.scrollTop > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }
  window.addEventListener("scroll", stickyHeader);

  return (
    <header className={sticky ? "active" : ""}>
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <Logo />
          </div>
          <div className="menu-area">
            <ul className={`menu ${menu ? "active" : ""}`}>
              <li>
                <Link to="/" onClick={menuToggleMobile}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/clients" onClick={menuToggleMobile}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/project" onClick={menuToggleMobile}>
                  Projects
                </Link>
              </li>
            </ul>
            <div
              className={`${classes.header_bar} header-bar ${
                menu ? "active" : ""
              }`}
              onClick={menuToggle}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              className={`mobile-menu-close ${menu ? "active" : ""}`}
              onClick={menuToggle}
            >
              X
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
