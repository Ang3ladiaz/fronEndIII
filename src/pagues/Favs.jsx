import {useUserStates} from "../Components/utils/global.context"


export const Favs =() =>{
  const {state, dispatch} =useUserStates();

  <h1>Dentists Favs</h1>

  return(
    <div>
    {state.favorite.map((favs)=>{
      return(
        <div key ={favs.id}>
          <h1>{favs.title}</h1>
          <button
            onClick={()=>
              dispatch({type: "REMOVE_BY_ID",payload:favs.id})
            }
          >
          Quitar de favoritos
          </button>        
        </div>
      );
    })}
    <h1>Favorites</h1>
    <button onClick={()=> dispatch({type:"REMOVE_ALL"})}> Limpiar los Favoritos</button>
    </div>

  )
};




