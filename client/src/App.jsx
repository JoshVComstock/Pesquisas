import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CentroForm from './Models/CentroForm'
import CiudadesForm from './Models/CiudadesForm'
import RedesForm from './Models/RedesForm'
import Centros from './pages/Centros'
import Ciudades from './pages/Ciudades'
import Redes from './pages/Redes'

function App() {
  return (
    <>
      <Centros/>
      <CentroForm/>
    </>
  )
}

export default App
