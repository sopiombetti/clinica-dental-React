import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { useContextGlobal } from '../Components/utils/global.context'



const Home = () => { 

  const {stateD, stateT} = useContextGlobal()
  

  return (
    <main className='body'>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {stateD.allDentists.map(dentist => <Card dentist={dentist}  key={dentist.id}/>)}
      </div>
    </main>
  )
}

export default Home