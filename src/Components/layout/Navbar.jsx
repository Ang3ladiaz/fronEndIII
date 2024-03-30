
import { Link} from 'react-router-dom'
import {useUserStates}from "../utils/global.context"

export const Navbar=()=>{

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const { state, dispatch} = useUserStates()
console.log(state.darkMode)

return(
  <div className={state.darkMode ? "containerNavbar-dark" : "containerNavbar-light"}>
    <ul>
      <Link to= "/">Home</Link>
      <Link to="/favs">Favs</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/detail">Detail</Link>
    </ul>
    <button onClick={()=> dispatch({type:"CHANGE_MODE"})}>Cambiar modo</button>
    <h3>El modo esta en{state.darkMode ? "dark" : "light"}</h3>
  </div>

);

};

