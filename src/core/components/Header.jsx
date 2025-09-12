import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function Header({ isNavToggled, setIsNavToggled }) {
  const toggleNav = () => setIsNavToggled((state) => !state);

  return (
    <header>
      <h1>Cocktail Cookbook</h1>

      <button
        className={`${isNavToggled ? "hamburger active" : "hamburger"}`}
        onClick={toggleNav}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`${isNavToggled ? "active" : ""}`}>
        <Link to={"/"} onClick={() => setIsNavToggled(false)}>
          Home
        </Link>
        <Link
          to={"/cocktails/favorites"}
          onClick={() => setIsNavToggled(false)}
        >
          Favorites
        </Link>
      </nav>
    </header>
  );
}

export default Header;
