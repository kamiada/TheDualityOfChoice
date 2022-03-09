import React from "react";
import "../pages.scss";
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
  RedPowder
} from "../../images_objects";
import { Link } from "react-router-dom";

const ingridientList = [];
const Game = () => {
  const chosenObject = (ingridient) => {
    ingridientList.push(ingridient);
    let removeMe = document.getElementById(ingridient);
    removeMe.disabled = true;
    removeMe.style.visibility = "hidden";
    return console.log("clicked");
  };
  const getEnding = () => {
    if (ingridientList.includes("Berries")) {
      console.log("bad");

      return "/badEnding";
    }
    if (ingridientList.includes("Vervain")) {
      console.log("nere");
      return "goodEnding";
    } else return "/final";
  };

  return (
    <>
      <>
        <img alt="table" className="game_table" src={Table} />
        <img alt="flask" className="flask" src={Flask} />
        <div alt="holder" className="object_holder">
        <ClickableObject
            id="RedPowder"
            onClick={() => chosenObject("RedPowder")}
            thisIs={RedPowder}
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
            id="Arsenic"
            onClick={() => chosenObject("Arsenic")}
            thisIs={Arsenic}
          />
          <ClickableObject
            id="Foxglove"
            onClick={() => chosenObject("Foxglove")}
            thisIs={Foxglove}
          />
        </div>
      </>
      <div className="link_holder">
        <Link params className="finished" to={() => getEnding()}>
          Done!
        </Link>
      </div>
    </>
  );
};

export default Game;
