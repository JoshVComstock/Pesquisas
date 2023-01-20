import React from 'react'
import { useState, useEffect } from 'react';
import styled from "styled-components";

const LaboratoriosForm = () => {
  const [nombre, setNombre] = useState("");
  const [direccion, SetDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [id_centros, setId_centros] = useState("");
  const [centros, setCentros] = useState([]);
  const [id_ciudades, setId_ciudades] = useState("");
  const [ciudades, setCiudades] = useState([]);
  const [id_redes, setId_redes] = useState("");
  const [redes, setRedes] = useState([]);

  const enviar = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/laboratorios", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        id_centros: id_centros,
        id_ciudades: id_ciudades,
        id_redes: id_redes,
      }),
    });

    const respuesta = await response?.json();
    if ((respuesta.mensaje = "Creado satisfactoriamente")) {

      setNombre("");
      SetDireccion("");
      setTelefono("");
      setId_centros("");
      setId_ciudades("");
      setId_redes("");
    }
  };

  async function MostrarCentros() {
    const response = await fetch("http://127.0.0.1:8000/api/centros", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setCentros(respuesta);
  }

  async function MostrarCiudades() {
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
    MostrarCentros();
    MostrarCiudades();
    MostrarRedes();
  }, []);

  return (
    <div>
      <div>
        <div>
          <h3>Ingrese un nuevo Laboratorio</h3>
        </div>
        <form action="submit">
          <div>
            <label>Nombre:</label>
            <input name="Nombre" type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div>
            <label>Dirección:</label>
            <input name="Direccion" type="text" required value={direccion} onChange={(e) => SetDireccion(e.target.value)} />
          </div>
          <div>
            <label>Teléfono:</label>
            <input name="Telefono" type="number" required value={telefono} onChange={(e) => setTelefono(e.target.value)} />
          </div>
          <div>
            <label>Centro de Salud:</label>
            <select value={id_centros} onChange={(e) => setId_centros(e.target.value)} >
              {centros.map((v, i) => (
                <option key={i} value={v.id}  >
                  {v.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Ciudad:</label>
            <select value={id_ciudades} onChange={(e) => setId_ciudades(e.target.value)} >
              {ciudades.map((v, i) => (
                <option key={i} value={v.id}  >
                  {v.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Red de Salud:</label>
            <select value={id_redes} onChange={(e) => setId_redes(e.target.value)} >
              {redes.map((v, i) => (
                <option key={i} value={v.id}  >
                  {v.nombre}
                </option>
              ))}
            </select>
          </div>
        </form>
        <div>
          <button onClick={enviar}>Registrar</button>
          <button>Cancelar</button>
        </div>
      </div>
    </div>
  )
}

export default LaboratoriosForm
