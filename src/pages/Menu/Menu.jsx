import React from "react";
import { Scene_1, Recipe, Game, Final, BadEnding, GoodEnding } from "..";
import {
  BrowserRouter as Router,
  Link,
  Routes,
} from "react-router-dom";
import "../pages.scss";

function Menu() {
  return (
    <div>
    Here
      <h1>The Duality of Choice</h1>
      <nav>
        <Link to="/scene">Start Game</Link>
      </nav>
    </div>
  );
}

export default Menu;
