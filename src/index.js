import React, { useReducer, useContext } from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer";
import reducers from "./reducers";

import "./styles.css";

export const StateContext = React.createContext();

function App() {
  const initialState = {
    beers: [],
    wasted: false
  };
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <AppContainer />
    </StateContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
