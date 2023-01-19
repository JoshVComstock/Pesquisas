import { useState } from 'react'
import { Routes, Route, HashRouter } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import CentroForm from './Models/CentroForm'
import CiudadesForm from './Models/CiudadesForm'
import RedesForm from './Models/RedesForm'
import Centros from './pages/Centros'
import Ciudades from './pages/Ciudades'
import Redes from './pages/Redes'
import Home from './pages/Home'
import Navbar from './components/app/navbar'
import Laboratorios from './pages/Laboratorios'
import Provincias from './pages/Provincias'
import { ModalContextProvider } from './context/modalContext';
import Registro_provincias from './pages/Registro_provincias'
import Modal  from './modal';
function App() {
  return (
    <>
    <BrowserRouter>
    <ModalContextProvider>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route path='' element={<Home/>}/>
            <Route path='/centros' element={<Centros/>}/>
            <Route path='/ciudades' element={<Ciudades/>}/>
            <Route path='/redes' element={<Redes/>}/>
            <Route path='/laboratorios' element={<Laboratorios/>}/>
            <Route path='/provincias' element={<Provincias/>}/>
            <Route path='/registro_provincias' element={<Registro_provincias/>}/>
          </Route> 
        </Routes>
        <Modal/>
        </ModalContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App
