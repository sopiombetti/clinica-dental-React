import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {stateD, dispatchD} = useContextGlobal()
  const param = useParams()
  const urlId = `https://jsonplaceholder.typicode.com/users/${param.id}`

  useEffect(() => {
    axios(urlId).then((response) => {
      dispatchD({type: "GET_DENTIST", payload: response.data})
      //console.log(response)
    }
  )}, [])


  return (
    <div className='detailCard'>
      <h1>Detail Dentist {param.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className='detail'>
        <h2>{stateD.dentist.name}</h2>
        <h4>{stateD.dentist.email}</h4>
        <h4>{stateD.dentist.phone}</h4>
        <h4>{stateD.dentist.website}</h4>
      </div>
    </div>
  )
}

export default Detail