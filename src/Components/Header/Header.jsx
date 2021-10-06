import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <a href="/" data-testid="headerTitle" className="headerTitle" to="/">
      My Tasks
    </a>
  );
};

export default Header;
