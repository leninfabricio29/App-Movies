import React from 'react'
import axios from 'axios';
import './stylesListado.css'

export default class ListarPeliculas extends React.Component {
    state = {
        peliculas: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/pelicula')
            .then(res => {
                const peliculas = res.data;
                this.setState({ peliculas });
            })
    }

    render() {
        return (
            <body className="bodyPelis">
                <h1>Peliculas en cartelera</h1>
                <div className="table-container">
                    <table id="customers">
                        <tr>
                            <th>Titulo</th>
                            <th>Año</th>
                            <th>Duracion</th>
                            <th>Genero</th>
                            <th>Estado</th>
                            <th>Opcion</th>

                        </tr>

                        {this.state.peliculas.map(datos => {
                            return (
                                <tr key={datos}>
                                    <td>{datos.titulo}</td>
                                    <td> {datos.anio}</td>
                                    <td>{datos.duracion}</td>
                                    <td>{datos.genero}</td>
                                    <td>Activo</td>
                                </tr>
                            )
                        })}
                    </table>

                </div>
            </body>

        )
    }
}
