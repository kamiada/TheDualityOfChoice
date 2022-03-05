import React from "react";
import {
  Link
} from "react-router-dom";
import "../pages.scss";

function Menu() {
  return (
    <div className="container_menu">
      <h1>The Duality of Choice</h1>
      <nav>
        <Link to="/scene">Start Game</Link>
      </nav>
    </div>
  );
}

export default Menu;
