import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from "react-router-dom";
import { Scene_1, Menu, Recipe, Game, Final, BadEnding, GoodEnding, Me } from "./pages";


function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="scene" element={<Scene_1 />} />
      </Routes>
    </div>
  );
}

export default App;
