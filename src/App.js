import React from 'react';
import './index.css';
import { Route, Routes } from "react-router-dom";
import { Scene_1, Menu, Recipe, Game, Final, BadEnding, GoodEnding } from "./pages";


function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/TheDualityOfChoice" element={<Menu />} />
        <Route path="scene" element={<Scene_1 />} />
        <Route path="recipe" element={<Recipe />} />
        <Route path="game" element={<Game />} />
        <Route path="badEnding" element={<BadEnding />} />
        <Route path="game/goodEnding" element={<GoodEnding />} />
        <Route path="final" element={<Final />} />
      </Routes>
    </div>
  );
}

export default App;
