import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Centros from "./pages/centros";
import Ciudades from "./pages/Ciudades";
import Redes from "./pages/Redes";
import Navbar from "./components/app/navbar";
import Home from "./pages/Home";
import { ModalContextProvider } from "./context/modalContext";
import Laboratorios from "./pages/Laboratorios";
import Provincias from "./pages/Provincias";
import Registro_provincias from "./pages/Registro_provincias";
import Municipios from "./pages/Municipios";
import Registro_hospitales from "./pages/Registro_hospitales";
import Modal from "./modal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Navcontextprovider } from "./context/navcontext";
import { Usercontextprovider } from "./context/userContext";
import ProtectedRoute from "./wrappers/ProtectedRoute";
import Control_Filtros from "./pages/Control_Filtros";
import Cartilla from "./models/Cartilla";

function App() {
  return (
    <>
      <BrowserRouter>
        <ModalContextProvider>
          <Usercontextprovider>
            <Navcontextprovider>
              <Routes>
                <Route path="login" element={<Login />} />
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Navbar />
                    </ProtectedRoute>
                  }
                >
                  <Route path="home" element={<Home />} />
                  <Route path="centros" element={<Centros />} />
                  <Route path="ciudades" element={<Ciudades />} />
                  <Route path="redes" element={<Redes />} />
                  <Route path="laboratorios" element={<Laboratorios />} />
                  <Route path="provincias" element={<Provincias />} />
                  <Route path="cartilla" element={<Cartilla/>}/>
                  <Route path="registro_provincias" element={<Registro_provincias />} />
                  <Route path="municipios" element={<Municipios />} />
                  <Route path="registro_hospitales" element={<Registro_hospitales />} />
                  <Route path="control_filtros" element={<Control_Filtros />} />
                  <Route path="registro_usuario" element={<Register />} />
                </Route>
              </Routes>
              <Modal />
            </Navcontextprovider>
          </Usercontextprovider>
        </ModalContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
