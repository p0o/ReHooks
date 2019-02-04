const beerReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BEER":
      return [...state, action.beerType];
    case "RESET":
      return [];
    default:
      return state;
  }
};

export default beerReducer;
