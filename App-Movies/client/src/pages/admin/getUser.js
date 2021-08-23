import React from 'react';
import axios from 'axios';
export default class UsersLista extends React.Component {
    state = {
        clientes: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/user')
            .then(res => {
                const clientes = res.data;
                this.setState({ clientes });
            })
    }

    render() {
        return (
            <table className="styled-table" >
                <tr>
                    <th>Usuario</th>
                    <th>Email</th>
                </tr>
                
                {this.state.clientes.map (datos => {
                 return (
                 <tr key={datos}>
                   <td>{datos.username}</td>
                   <td> {datos.email}</td>
                 </tr>
                 )})}   
            </table>
        )
    }
}