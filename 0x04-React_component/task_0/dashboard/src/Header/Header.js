import React from "react";
import holberton_logo from "../assets/logo_holberton.jpg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={holberton_logo} alt='logo holberton' />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;
