import React from 'react'
import { useContextGlobal } from './utils/global.context'

const Footer = () => {
  
  const {stateT} = useContextGlobal()
  
  return (
    <footer className={stateT}>
        <p>Powered by</p>
        <img src="../../public/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer