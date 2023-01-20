import React from 'react'
import { useState, useEffect } from 'react';
import styled from "styled-components";


const MunicipiosForm = () => {
  const [municipio, setMunicipio] = useState("");
  const [id_ciudades, setId_ciudades] = useState("");
  const [ciudades, setCiudades] = useState([]);

  const enviar = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/municipios", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        municipio: municipio,
        id_ciudades: id_ciudades,
      }),
    });

    const respuesta = await response?.json();
    if ((respuesta.mensaje = "Creado satisfactoriamente")) {
      setMunicipio("");
      setId_ciudades("");
    }
  };

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

  useEffect(() => {
    MostrarCiudades();
  }, []);
  return (
    <div>
      <div>
        <div>
          <h3>Ingrese un nuevo Municipio</h3>
        </div>
        <form action="submit">
          <div>
            <label>Nombre:</label>
            <input name="Nombre" type="text" required value={municipio} onChange={(e) => setMunicipio(e.target.value)} />
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
        </form>
        <div>
          <button type='submit' onClick={enviar}>Registrar</button>
          <button>Cancelar</button>
        </div>
      </div>
    </div>
  )
}

export default MunicipiosForm
