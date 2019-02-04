[![Edit rehooks](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/p0o/ReHooks/tree/master/)

# ReHooks
⛷ An experiment to replace Redux with Hooks!

This repository maintains an implementation to handle the state similarly to Redux using actions and reducers. This is a fun app to help you keep count of the amount of beer you drink in one night, how much callories you took into your system and give you the option of ending the night when you get wasted and reset the drinking session for the whole state.

## Usage
This implementation is not using any external libraries. Even `combineReducers` function is written from scratch but it's pretty much the same as the one redux is using. We also don't use any Wrappers similar to `react-redux`. 

Setup would be like this on the top level:

```jsx
const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <AppContainer />
    </StateContext.Provider>
  );
```

And that's how to access state and dispatch anywhere down the rabit hole:

```javascript
const { state, dispatch } = useContext(StateContext);
```

We also use multiple reducer patterns like this:

```
reducers/index.js
reducers/beerReducer.js
reducers/wastedReducer.js
```
Any action will be executed on all the reducers and and the changes will take effect in the state, triggering a render on the components 🤷‍♂️

## Goal
It's just an experiment with `useReducer` and `useContext` Hooks with the same architecture we are using in Redux for years. It's helpful because there's no difference in the way reducers and actions are written in this style. It's also a great help if you want to build your new app using Hooks but you have issues to manage your state object as it grows to be more complicated. Other than that, I don't really recommend this over Redux, as I stated it's just an experiment with no real advantage.

## Downfalls
This implementation still do not support middlewares and devTools. This functionality will be added soon but by then you can look into these two libraries which are tackling the same problems:

1. [reinpect](https://github.com/troch/reinspect)
2. [react-enhanced-reducer-hook](https://github.com/shiningjason/react-enhanced-reducer-hook)
