import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { StateContext } from "./index";

import "./styles.css";

const beerCanImg = "https://png.icons8.com/beer-can/color/1600";
const beerPintImg = "https://image.flaticon.com/icons/png/512/684/684630.png";
const beerBottleImg = "https://png.icons8.com/color/1600/beer-bottle";

const imgStyle = {
  width: 100
};

function BeerManager() {
  const { state, dispatch } = useContext(StateContext);

  function addBeer(beerType) {
    dispatch({
      type: "ADD_BEER",
      beerType
    });
  }

  return (
    <div>
      {state.wasted ? (
        <h2>No more beer for you! Go Home!</h2>
      ) : (
        <div>
          <h2>Drank another beer?</h2>
          <a href="#" onClick={() => addBeer("bottle")}>
            <img src={beerBottleImg} style={imgStyle} />
          </a>
          <a href="#" onClick={() => addBeer("pint")}>
            <img src={beerPintImg} style={imgStyle} />
          </a>
          <a href="#" onClick={() => addBeer("can")}>
            <img src={beerCanImg} style={imgStyle} />
          </a>
        </div>
      )}
    </div>
  );
}

export default BeerManager;
