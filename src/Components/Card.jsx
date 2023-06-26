import axios from "axios";
import React, { useState } from "react";
import { routes } from './utils/routes'

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  
  const [dentists, setDentists] = useState([])
  const url = "https://jsonplaceholder.typicode.com/users"
  
  useEffect(() => {
    axios(url).then((response) => {
      console.log(response.data)
      setDentists(response.data)

    })
  }, [])


  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {dentists.map(dentist => <Link to={routes.detail + dentist.id} key={dentist.id}>
          <h3>{dentist.name}</h3>
          <p>{dentist.id}</p>
        </Link>)}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;