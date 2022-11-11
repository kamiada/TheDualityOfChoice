import React from "react";
import "../pages.scss";
import "./game.scss";
import { ClickableObject } from "../../components";
import { Table } from "../images";
import {
  Flask,
  GreenPowder,
  Vervain,
  PokeweedBerries,
  Dandelion,
  Mak,
  Bez,
  Arsenic,
  Foxglove,
  RedPowder,
} from "../../images_objects";
import { Link } from "react-router-dom";

const ingredientList = [];
const Game = () => {
  const chosenObject = (ingredient) => {
    ingredientList.push(ingredient);
    let removeMe = document.getElementById(ingredient);
    removeMe.disabled = true;
    removeMe.style.visibility = "hidden";
    return ingredientList;
  };
  const getEnding = () => {
    if (ingredientList.includes("Berries")) {
      return "/badEnding";
    }
    if (ingredientList.includes("Vervain")) {
      return "/goodEnding";
    } else return "/final";
  };

  return (
    <>
      <div className="table_container">
        <ClickableObject
          id="Arsenic"
          onClick={() => chosenObject("Arsenic")}
          thisIs={Arsenic}
        />
        <ClickableObject
          id="Foxglove"
          onClick={() => chosenObject("Foxglove")}
          thisIs={Foxglove}
        />
        <ClickableObject
          id="Berries"
          onClick={() => chosenObject("Berries")}
          thisIs={PokeweedBerries}
        />
        <ClickableObject
          id="Powder"
          onClick={() => chosenObject("Powder")}
          thisIs={GreenPowder}
        />
        <ClickableObject
          id="RedPowder"
          onClick={() => chosenObject("RedPowder")}
          thisIs={RedPowder}
        />
        <ClickableObject
          id="Mak"
          onClick={() => chosenObject("Mak")}
          thisIs={Mak}
        />
        <ClickableObject
          id="Bez"
          onClick={() => chosenObject("Bez")}
          thisIs={Bez}
        />
        <ClickableObject
          id="Dandelion"
          onClick={() => chosenObject("Dandelion")}
          thisIs={Dandelion}
        />
        <ClickableObject
          id="Vervain"
          onClick={() => chosenObject("Vervain")}
          thisIs={Vervain}
        />
        <img alt="flask" className="flask" src={Flask} />
      </div>
    </>
  );
};

export default Game;
