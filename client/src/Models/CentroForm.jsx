import React from "react";
import { useState, useEffect } from 'react';
import styled from "styled-components";
import Ciudades from "../pages/Ciudades";
import '../pages/css/Centros.css';

const CentroForm = ({MostrarCentros}) => {
  const [nombre, setNombre] = useState("");
  const [direccion, SetDireccion] = useState("");
  const [id_redes, setId_redes] = useState("");
  const [redes, setRedes] = useState([]);
  const [telefono, setTelefono] = useState("");
  const [id_ciudad, setId_ciudad] = useState("");
  const [ciudades, setCiudades] = useState([]);
  const [area, setArea] = useState("");
  const [seguimiento_casos, setSeguimiento_casos] = useState("");
  const [contacto, setContacto] = useState("");

  const enviar = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/centros", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        direccion: direccion,
        id_redes: id_redes,
        telefono: telefono,
        id_ciudad: id_ciudad,
        area: area,
        seguimiento_casos: seguimiento_casos,
        contacto: contacto,
      }),
    });

    const respuesta = await response?.json();
    if ((respuesta.mensaje = "Creado satisfactoriamente")) {
     
      setNombre("");
      SetDireccion("");
      setId_redes("");
      setTelefono("");
      setId_ciudad("");
      setArea("");
      setSeguimiento_casos("");
      setContacto("");
    }
  };

  async function mostrarciudades() {
    const response = await fetch("http://127.0.0.1:8000/api/ciudades", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setCiudades(respuesta);

  }

  async function MostrarRedes() {
    const response = await fetch("http://127.0.0.1:8000/api/redes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setRedes(respuesta);
  }

  useEffect(() => {
    mostrarciudades();
    MostrarRedes();
  }, []);

  return (
    <div>
      <div>
        <div>
          <h3>Ingrese un nuevo Centro</h3>
        </div>
        <form action="submit">
          {/*<div>
            <label>ID:</label>
            <input readOnly type="text" required />
          </div>*/}
          <div>
            <label>Nombre:</label>
            <input  name="Nombre" type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)}/>
          </div>
          <div>
            <label>Red de Salud:</label>
            <select value={id_redes} onChange={(e)=>setId_redes(e.target.value)} >
              {redes.map((v, i) => (
                <option key={i} value={v.id}  >
                  {v.nombre}
                </option>
              ))}
            </select>
            
            {/*<input  name="RedSalud" type="text" required value={redsalud} onChange={(e) => setId_redes(e.target.value)}/>
            <select name="select">
              <option value="Red Norte">Red Norte</option>
              <option value="Red Sur">Red Sur</option>
              <option value="Red Este">Red Este</option>
            </select>*/}
          </div>
          <div>
            <label>Teléfono:</label>
            <input name="Telefono" type="number" required onChange={(e) => setTelefono(e.target.value)}/>
          </div>
          <div>
            <label>Ciudad:</label>
            <select value={id_ciudad} onChange={(e)=>setId_ciudad(e.target.value)} >
              {ciudades.map((v, i) => (
                <option key={i} value={v.id}  >
                  {v.ciudad}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Área:</label>
            <select name="select">
              <option value="Rural" onChange={(e) => setArea(e.target.value)}>Rural</option>
              <option value="Urbana"  onChange={(e) => setArea(e.target.value)}>Urbana</option>
            </select>
          </div>
          <div>
            <label>Seguimiento de Casos:</label>
            <input name="Telefono" type="text" required onChange={(e) => setSeguimiento_casos(e.target.value)}/>
            {/*<fieldset>
              <label>
                <input type="radio" name="Seguimiento" value={seguimiento} onChange={(e) => setSeguimiento(e.target.value)}/> Si
              </label>
              <label>
                <input type="radio" name="Seguimiento" value={seguimiento} onChange={(e) => setSeguimiento(e.target.value)}/> No
              </label>
              </fieldset>*/}
          </div>
          <div>
            <label>Contacto:</label>
            <input name="Contacto" type="number" required value={contacto} onChange={(e) => setContacto(e.target.value)}/>
          </div>
        </form>
        <div>
          <button onClick={enviar}>Registrar</button>
          <button>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default CentroForm;
