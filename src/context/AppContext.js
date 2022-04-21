import { createContext, useContext, useReducer } from "react";
import { AppContextReducerFunction } from "./AppContextReducerFunction";

const AppContext = createContext();

const contextInitialValue = {
  feed: [],
};
const AppContextProvider = ({ children }) => {
  const [appState, appDispatch] = useReducer(
    AppContextReducerFunction,
    contextInitialValue
  );
  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };
