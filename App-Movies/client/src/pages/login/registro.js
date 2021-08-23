import React, { useState } from 'react'
import Axios from 'axios'
import './registroStyles.css'
function Registro() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const registrar = async (e) => {
        e.preventDefault()
        const newUser = { username, email, password }
        const respuesta = await Axios.post('http://localhost:4000/api/auth/register', newUser)
        const mensaje = respuesta.data.mensaje

        console.log(mensaje)
    }
    return (
        <div className="container-form">
            <h3>Registrarse</h3>
            <form className="form-register" onSubmit={registrar} >
                <div className="inputs">
                    <input type="email" placeholder="Su email" onChange=
                        {e => setEmail(e.target.value)}></input>
                    <input type="text" placeholder="Su usuario" onChange=
                        {e => setUsername(e.target.value)}></input>
                    <input type="password" placeholder="Su clave" onChange=
                        {e => setPassword(e.target.value)}></input>
                    <button type="submit">Registrar</button>

                </div>
            </form>
            <div>

                <a href="#">Ya tienes cuenta ? Inicia Sesion</a>
                <p>Somos la plataforma que te otorga el mejor servicio de entretenimiento</p>
            </div>

        </div>
    )
}

export default Registro;