import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
//importamos los comp creados
import { useState } from "react"
import React, { Component } from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import NavBarExample from './layouts/navbar';
import Carrito from './components/carrito';


function App() {
  return (
    
    <div className="App">
      <br></br>

<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route index element={ <Home saludo={"titulo"} subtitulo={"este es un subtitulo"} /> } />
    <Route path='about' element={ <About /> } />
    <Route path='contact' element={ <Contact /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>
<Carrito/>
    </div>
  );
}

const home = ({saludo, subtitulo}) => {
  return(
    <div>
      <h1>{saludo}</h1>
      <h2>{subtitulo}</h2>
    </div>
  )
}
export default App;