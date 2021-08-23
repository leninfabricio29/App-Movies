import React from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './navbarElements';

function Navbar () {
    return (
        <>
            <Nav>
                <NavMenu>
                <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/drama' activeStyle>
                        Drama
                    </NavLink>
                    <NavLink to='/terror' activeStyle>
                        Terror
                    </NavLink>
                    <NavLink to='/series' activeStyle>
                        Series
                    </NavLink>
                    <NavLink to='/accion' activeStyle>
                        Accion
                    </NavLink>
                    <NavLink to='/superheroes' activeStyle>
                        SuperHeroes
                    </NavLink>
                    <NavLink to='/Documentales' activeStyle>
                        Documentales
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/registro'>Registrate</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;