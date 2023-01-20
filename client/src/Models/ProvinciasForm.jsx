import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProvinciasForm = () => {
    const [provincia, setProvincia] = useState("");
    const [id_ciudad, setId_ciudad] = useState("");
    const [ciudades, setCiudades] = useState([]);

    const enviar = async (e) => {
        e.preventDefault();

        const response = await fetch("http://127.0.0.1:8000/api/provincias", {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify({
                provincia: provincia,
                id_ciudad: id_ciudad,
            }),
        });

        const respuesta = await response?.json();
        if ((respuesta.mensaje = "Creado satisfactoriamente")) {
          setProvincia("");
          setId_ciudad("");
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
          <h3>Ingrese un nuevo Laboratorio</h3>
        </div>
        <form action="submit">
          <div>
            <label>Nombre:</label>
            <input name="Nombre" type="text" required value={provincia} onChange={(e) => setProvincia(e.target.value)} />
          </div>
          <div>
            <label>Ciudad:</label>
            <select value={id_ciudad} onChange={(e) => setId_ciudad(e.target.value)} >
              {ciudades.map((v, i) => (
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

export default ProvinciasForm
