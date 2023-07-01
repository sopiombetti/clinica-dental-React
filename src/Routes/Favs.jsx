import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";



const Favs = () => {

  const {stateF} = useContextGlobal()
  

  return (
    <div className='body'>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {stateF.map(favDentist => <Card key={favDentist.id} dentist={favDentist} origin={true}/>)}
      </div>
    </div>
  );
};

export default Favs;