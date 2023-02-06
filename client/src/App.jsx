import { useState } from "react";
import reactLogo from "./assets/react.svg";
import CentroForm from "./Models/CentroForm";
import CiudadesForm from "./Models/CiudadesForm";
import EnfermedadesForm from "./Models/EnfermedadesForm";
import RedesForm from "./Models/RedesForm";
import Centros from "./pages/centros";
import Ciudades from "./pages/Ciudades";
import Enfermedades from "./pages/Enfermedades";
import Redes from "./pages/Redes";
import Navbar from "./components/app/navbar";
import Home from "./pages/Home";
import { ModalContextProvider } from "./context/modalContext";
import Laboratorios from "./pages/Laboratorios";
import Provincias from "./pages/Provincias";
import Registro_provincias from "./pages/Registro_provincias";
import Municipios from "./pages/Municipios";
import Registro_municipios from "./pages/Registro_municipios";
import Modal from "./modal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Navcontextprovider } from "./context/navcontext";
import { Usercontextprovider } from "./context/userContext";
import ProtectedRoute from "./wrappers/ProtectedRoute";
import Redsalud from "./pages/RedSalud"

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
                  <Route path="enfermedades" element={<Enfermedades />} />
                  <Route path="laboratorios" element={<Laboratorios />} />
                  <Route path="provincias" element={<Provincias />} />
                  <Route path="registro_provincias" element={<Registro_provincias />} />
                  <Route path="municipios" element={<Municipios />} />
                  <Route path="registro_municipios" element={<Registro_municipios />} />
                  <Route path="redsalud" element={<Redsalud />} />
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
