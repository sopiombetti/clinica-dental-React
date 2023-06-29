import axios from "axios";
import { createContext, useContext, useReducer, useState, useEffect} from "react";


const ContextGlobal = createContext(undefined);

const initialStateT = ""

const initialStateF = JSON.parse(localStorage.getItem("favs")) || []

const initialStateD = {
  allDentists: [],
  dentist: {}
}

const reducerD = (state, action) => {
  switch(action.type){
    case "GET_ALL_DENTISTS":
      return {allDentists: action.payload, dentist: state.dentist}
    case "GET_DENTIST":
      return {allDentists: state.allDentists, dentist: action.payload}
  }
}

const reducerF = (state, action) => {
  switch(action.type){
    case "LIKE":
      return [...state, action.payload]
    case "DISLIKE":
      return action.payload
  }
}

const reducerT = (state, action) => {
  switch(action.type){
    case "LIGHT":
      return ""
    case "DARK":
      return "dark"
  }
}

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [stateT, dispatchT] = useReducer(reducerT, initialStateT)  //Theme
  const [stateF, dispatchF] = useReducer(reducerF, initialStateF)  //Favs
  const [stateD, dispatchD] = useReducer(reducerD, initialStateD)  //Dentists

  const url = "https://jsonplaceholder.typicode.com/users"
  
  useEffect(() => {
    axios(url).then((response) => {
      dispatchD({type: "GET_ALL_DENTISTS", payload: response.data})
    })
  }, [])

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(stateF))
    console.log(stateF)
  }, [stateF])

  return (
    <ContextGlobal.Provider value={{stateD, dispatchD, stateF, dispatchF, stateT, dispatchT}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);