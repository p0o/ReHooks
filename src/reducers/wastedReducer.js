const wastedReducer = (state = false, action) => {
  switch (action.type) {
    case "MAKE_WASTED":
      return true;
    case "RESET":
      return false;
    default:
      return state;
  }
};

export default wastedReducer;
