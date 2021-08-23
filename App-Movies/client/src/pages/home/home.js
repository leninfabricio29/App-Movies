import React from 'react'
import './homeStyles.css'
import NavBar from '../../components/navbar/index'
import Peliculas from '../home/getPeliculas'
function Home() {
    return (
        <div>
            <NavBar />
            <div >
                <Peliculas />
            </div>
        </div>

    )
}
export default Home;