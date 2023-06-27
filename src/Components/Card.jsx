import axios from "axios";
import React, { useState } from "react";
import { routes } from './utils/routes'
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Card = ({dentist}) => {

  const {stateF, dispatchF, stateT} = useContextGlobal()
  const [isFav, setIsFav] = useState(false)

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    if(isFav){
      dispatchF({type: "DISLIKE", payload: (stateF.filter(dentist.id != stateF.dentist.id))})
      setIsFav(false)
    }
    else{
      dispatchF({type: "LIKE", payload: dentist})
      setIsFav(true)
    }
  }


  return (
    <div id="card" className={stateT}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="../../public/images/doctor.jpg" width="90px" height="100px"/>
        <Link to={"/detalle/" + dentist.id} className="link"><h3>{dentist.name}</h3></Link>
        <h4>{dentist.username}</h4>
        <p>{dentist.id}</p>
        
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;