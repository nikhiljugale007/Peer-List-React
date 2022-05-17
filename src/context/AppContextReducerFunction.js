const AppContextReducerFunction = (state, action) => {
  switch (action.type) {
    case "SET_FEED":
      return {
        ...state,
        feed: action.payload,
      };
    case "SET_COMMENTS":
      return state;
    default:
      return state;
  }
};

export { AppContextReducerFunction };
