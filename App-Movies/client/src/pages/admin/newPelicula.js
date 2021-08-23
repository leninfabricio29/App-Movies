import React from 'react'
import './stylesForm.css'

export default class Pelicula extends React.Component {

    render() {
        return (
            <body className="body">
                <div className="container">
                    <h3>Administracion peliculas</h3>
                    <div className="container-formulario">
                        <form>
                            <div className="form-input-texto">
                                <input placeholder="Nombre de la pelicula"></input>
                                <input placeholder="Sipnosis de la pelicula"></input>
                                <input placeholder="Duracion"></input>
                                <input placeholder="Año"></input>
                            </div>

                            Seleccione una imagen: <input type="file"></input><br></br><br></br>
                                Seleccione el  archivo mp4: <input type="file"></input><br></br>
                                Género: <select className="genero" id="genero">
                                    <option value="Drama">Drama</option>
                                    <option value="Terror">Terror</option>
                                    <option value="Series">Series</option>
                                    <option value="Accion">Accion</option>
                                    <option value="Superheroes">Superheroes</option>
                                    <option value="Documentales">Documentales</option>
                                </select>
                                <div className="form-button">
                                    <button className="btnRegistrar">Registrar</button>
                                    <button className="btnEditar"> Editar</button>
                                    <button className="btnEliminar">Eliminar</button>
                                </div>
                        </form>
                    </div>
                    </div>
            </body>

                )



    }

}


