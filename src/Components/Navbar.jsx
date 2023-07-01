import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'
import { useContextGlobal } from './utils/global.context'



const Navbar = () => {
  
  const {stateT, dispatchT} = useContextGlobal()
  const [isLight, setIsLight] = useState(true)

  const changeTheme = () => {
    if(isLight){
      dispatchT({type: "DARK"})
      setIsLight(false)
    }
    else{
      dispatchT({type: "LIGHT"})
      setIsLight(true)
    }
  }

  return (
    <nav className={stateT}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <img src="../../public/DH.ico"/>
      <div className="links">
        <Link to={routes.home}><h3 className="link">Home</h3></Link>
        <Link to={routes.contact}><h3 className="link">Contact</h3></Link>
        <Link to={routes.favs}><h3 className="link">Favs</h3></Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={changeTheme}>Change theme</button>
      </div>
    </nav>
  )
}

export default Navbar