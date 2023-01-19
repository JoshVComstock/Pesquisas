import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CentroForm from './Models/CentroForm'
import CiudadesForm from './Models/CiudadesForm'
import EnfermedadesForm from './Models/EnfermedadesForm'
import RedesForm from './Models/RedesForm'
import Centros from './pages/centros'
import Ciudades from './pages/Ciudades'
import Enfermedades from './pages/Enfermedades'
import Redes from './pages/Redes'
import Navbar from './components/app/navbar'
import Home from './pages/Home'
import { ModalContextProvider } from './context/modalContext'
import Laboratorios from './pages/Laboratorios'
import Provincias from './pages/Provincias'
import Registro_provincias from './pages/Registro_provincias'
import Modal from './modal'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <ModalContextProvider>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route path='' element={<Home/>}/>
            <Route path='/centros' element={<Centros/>}/>
            <Route path='/enfermedades' element={<Enfermedades/>}/>
            <Route path='/redes' element={<Redes/>}/>
            <Route path='/ciudades' element={<Ciudades/>}/>
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
