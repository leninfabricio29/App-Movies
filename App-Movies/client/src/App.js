import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home/home' 
import Registro from './pages/login/registro'
import Login from './pages/login/login'
import Listado from './pages/admin/getUser'
import Pelicula from './pages/admin/newPelicula'
import ListadoPeliculas from './pages/admin/getPeliculas';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/registro" exact component={Registro}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/admin/listar" exact component={Listado}></Route>
      <Route path="/admin/registrar/pelicula" exact component={Pelicula}></Route>
      <Route path="/admin/listado/peliculas" exact component={ListadoPeliculas} ></Route>

      </Switch>
    </Router>
  );
}

export default App;
