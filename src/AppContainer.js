import React, { useContext } from "react";
import ReactDOM from "react-dom";
import BeerManager from "./BeerManager";
import BeerStats from "./BeerStats";
import { StateContext } from "./index";

import "./styles.css";

function AppContainer() {
  const { state, dispatch } = useContext(StateContext);
  function makeWasted() {
    dispatch({
      type: "MAKE_WASTED"
    });
  }

  function reset() {
    dispatch({
      type: "RESET"
    });
  }

  return (
    <div className="App">
      <BeerManager />
      <BeerStats />
      {state.wasted ? (
        <a href="#" className="reset" onClick={reset}>
          Reset
        </a>
      ) : (
        <a href="#" className="wasted" onClick={makeWasted}>
          Okay! I'm Wasted!
        </a>
      )}
    </div>
  );
}

export default AppContainer;
