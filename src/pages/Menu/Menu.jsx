import React from "react";
import {
  Link
} from "react-router-dom";
import "../pages.scss";

function Menu() {
  return (
    <div className="container_menu">
      <h1 className="title">The Duality of Choice</h1>
      <nav className="nav_menu">
        <Link to="/scene">Start Game</Link>
      </nav>
    </div>
  );
}

export default Menu;
