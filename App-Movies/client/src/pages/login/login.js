import React, { useState } from 'react'
import Axios from 'axios'
import './loginStyles.css'

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const ingresar = async (e) => {
        e.preventDefault()
        const dateUser = { email, password }
        const respuesta = await Axios.post('http://localhost:4000/api/auth/login', dateUser)
        const mensaje = respuesta.data.mensaje

        console.log(mensaje)
    }
    return(
    <div className="container-login">
        <form onSubmit={ingresar}>
            <input placeholder="email , please" onChange=
                        {e => setEmail(e.target.value)}></input>
            <input placeholder="password, please" onChange=
                        {e => setPassword(e.target.value)}></input>
            <button type="submit">Ingresar</button>
        </form>
    </div>

    )}
export default Login;