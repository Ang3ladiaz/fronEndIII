import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUserStates } from "../Components/utils/global.context";
import {getUserById} from "../api/users"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
export const Detail =() =>{
  const {id}=useParams();
  const [userSelected, setUserSelected] = useState({});

  const{state, dispatch} = useUserStates()
  console.log (state)

  useEffect(()=>{
    const getData=async()=>{
      let userData=await getUserById(id)
      setUserSelected(userData);
    }
    getData()

  },[id]);

  return(
    <div>
      <h1>nombre:{userSelected.name}</h1>
      <h3>email:{userSelected.email} </h3>
      <h3>Telefono:{userSelected.phone} </h3>
      <h3>Sitio web:{userSelected.website} </h3>
      <button onClick={() => dispatch ({type:"ADD_FAVORITES", payload:userSelected})}>⭐</button>
    </div>
  )

}
