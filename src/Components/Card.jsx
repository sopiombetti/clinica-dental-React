import axios from "axios";
import React, { useState } from "react";
import { routes } from './utils/routes'
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Card = ({dentist, origin}) => {

  const {stateF, dispatchF, stateT} = useContextGlobal()
  

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    
    if(origin){
      localStorage.clear()
      dispatchF({type: "DISLIKE", payload: stateF.filter((den) => den.id != dentist.id)})
      
    }
    else if(stateF.find((denFav) => denFav.id == dentist.id)){
      document.querySelector('.favButton').disabled = true;
      alert("Este dentista ya fue agregado previamente a favoritos")
    }
    else{
      dispatchF({type: "LIKE", payload: dentist})
    }
    
    
  }


  return (
    <div id="card" className={stateT ? "cardDark" : undefined}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="../../public/images/doctor.jpg" width="90px" height="100px"/>
        <Link to={"/detalle/" + dentist.id} className="link"><h3>{dentist.name}</h3></Link>
        <h4>{dentist.username}</h4>
        <p>{dentist.id}</p>
        
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">{origin ? "Remove fav" : "Add fav"}</button>
    </div>
  );
};

export default Card;