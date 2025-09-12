import React from "react";
import { Link } from "react-router-dom";

import HamburgerButton from "./HamburgerButton";

import "./Header.css";

function Header({ isNavToggled, setIsNavToggled }) {
  return (
    <header>
      <h1>Cocktail Cookbook</h1>

      <HamburgerButton
        isNavToggled={isNavToggled}
        setIsNavToggled={setIsNavToggled}
      />

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
