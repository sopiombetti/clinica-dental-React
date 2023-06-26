import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <img src="../../public/DH.ico"/>
      <div className="links">
        <Link to={routes.home}><h3 className="link">Home</h3></Link>
        <Link to={routes.contact}><h3 className="link">Contact</h3></Link>
        <Link to={routes.favs}><h3 className="link">Favs</h3></Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button>Change theme</button>
      </div>
    </nav>
  )
}

export default Navbar