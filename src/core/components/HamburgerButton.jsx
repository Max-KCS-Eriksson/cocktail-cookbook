import React from "react";

import "./HamburgerButton.css";

function HamburgerButton({ isNavToggled, setIsNavToggled }) {
  const toggleNav = () => setIsNavToggled((state) => !state);

  return (
    <button
      className={`${isNavToggled ? "hamburger active" : "hamburger"}`}
      onClick={toggleNav}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
  );
}

export default HamburgerButton;
