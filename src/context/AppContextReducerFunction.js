const AppContextReducerFunction = (state, action) => {
  switch (action.type) {
    case "SET_FEED":
      return {
        ...state,
        feed: action.payload,
      };
    default:
      return state;
  }
};

export { AppContextReducerFunction };
