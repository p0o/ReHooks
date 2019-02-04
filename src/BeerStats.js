import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { StateContext } from "./index";

function BeerStats() {
  const { state } = useContext(StateContext);

  const cansCount = state.beers.filter(x => x === "can").length;
  const pintsCount = state.beers.filter(x => x === "pint").length;
  const bottlesCount = state.beers.filter(x => x === "bottle").length;

  // considering you drink Heineken! Because most devs have no taste in alcohol!
  const oneCanCallories = 148;
  const oneBottleCallories = 148;
  const onePintCalories = 255;

  const accumulatedCallories = state.beers.reduce((prev, current) => {
    switch (current) {
      case "can":
        return prev + oneCanCallories;
      case "bottle":
        return prev + oneBottleCallories;
      case "pint":
        return prev + onePintCalories;
    }
  }, 0);

  return (
    <div>
      <h3>
        By now you had {bottlesCount} bottles, {pintsCount} pints and{" "}
        {cansCount} cans of beer
      </h3>
      <h2>Total Callories: {accumulatedCallories}</h2>
    </div>
  );
}

export default BeerStats;
