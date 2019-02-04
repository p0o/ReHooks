import beerReducer from "./beerReducer";
import wastedReducer from "./wastedReducer";
import combineReducers from "./combineReducers";

export default combineReducers({
  wasted: wastedReducer,
  beers: beerReducer
});
