import { createContext, useContext, useState } from "react";

const UserStates = createContext();

let initialState = {

  favs: [],
  cart: [],
  darkMode: false,
};

const UsersReducer= ( state, action)=>{

  Swith (action.type){
    case "ADD_FAVORITES":
      return {...state, favs:[...state.favs, action.payload]};
    case "REMOVE_BY_ID":
      let newArr = state.favs.filter(
        (user)=> user.id !== action.payload
      )
      return {...state,favs:newArr};
    case "REMOVE_ALL":
      return {...state,favs:[]};
    case "CHANGE_MODE":
      return {...state, darkMode:! state.darkMode};
    default:
      return state;
    };
};



const UserContext = ({ children }) => {
  
  const [state, dispatch]=useReducer (UsersReducer,initialState);

  let data={state, dispatch}

  return (
    <UsersState.Provider value= {data}>{children}</UsersState.Provider>

  );
};

export default global.context;


export const useUserStates = ()=> useContext (UserStates);