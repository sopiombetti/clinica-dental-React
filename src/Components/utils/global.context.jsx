import { createContext, useContext, useReducer, useState} from "react";

export const initialStateT = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [stateT, dispatchT] = useReducer(reducerT, initialStateT)  //Theme
  const [stateF, dispatchF] = useReducer(reducerF, initialStateF)  //Favs

  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};