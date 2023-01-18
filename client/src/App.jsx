import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Centros from './pages/centros'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Navbar from './components/app/navbar'

function App() {
  return (
    <>
    <BrowserRouter>
      <ModalContextProvider>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route path='' element={<Home/>}/>
            <Route path='/centros' element={<Pacientes/>}/>
            <Route path='/ciudades' element={<Profesional/>}/>
            <Route path='/redes' element={<Consultas/>}/>
            <Route path='/laboratorios' element={<Citas/>}/>
            <Route path='/provincias' element={<Tratamiento/>}/>
            <Route path='/Registro_provincias' element={<Insumos/>}/>
          </Route> 
        </Routes>
        <Modal />
      </ModalContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App
