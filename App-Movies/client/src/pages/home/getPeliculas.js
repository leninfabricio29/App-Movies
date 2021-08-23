import React from 'react';
import axios from 'axios';
import './peliculaStyles.css'
export default class PeliculasLista extends React.Component {
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
            <div className="conteiner-movie">
                {this.state.peliculas.map(datos => {
                    return (
                        <div key={datos} className="grid-item-movie">
                            <div className="conteiner-item-movie">
                                <img src="https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png" width="150"></img>
                            </div>
                            <div className="conteiner-datos">
                                <p>Titulo: <label>{datos.titulo}</label></p>
                                <p>Duracion: <label>{datos.duracion}</label></p>
                                <p>Año: <label> {datos.anio}</label></p>
                                <p>Genero: <label> {datos.genero}</label></p>
                            </div>
                            <div >
                                <button className="btn-reproducir">Reproducir</button>
                            </div>

                        </div>
        )
    })
}
            </div >
        )
    }
}