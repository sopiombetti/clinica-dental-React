import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const regex = /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.length > 5 && regex.test(email)){
      setMessage(`Gracias ${name}, te contactaremos cuanto antes vía mail`)
    }
    else{
      setMessage("Por favor verifique su información nuevamente")
    }
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <button>Enviar</button>
      </form>
      {message}
    </div>
  );
};

export default Form;