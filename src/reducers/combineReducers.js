function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);

  return function combineReducers(state = {}, action) {
    const nextState = {};
    let hasChanged = false;
    // calculate the next state
    reducerKeys.forEach(key => {
      const reducer = reducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        throw new Error(
          `You already started drinking? Your reducer for ${key} is returning undefined!`
        );
      }
      nextState[key] = nextStateForKey;
      if (nextStateForKey !== previousStateForKey) {
        hasChanged = true;
      }
    });

    // Not the best approach, we're gonna add middlewares later
    console.log("State ", state);
    console.log("Dispatching ", action);
    console.log("Next state ", nextState);

    return hasChanged ? nextState : state;
  };
}

export default combineReducers;
