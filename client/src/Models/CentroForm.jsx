import React from "react";
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import "../pages/css/Centros.css";

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
  const [loading, setLoading] = useState(false);

  const enviar = async (e) => {
    e.preventDefault();
    setLoading(true);
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
      MostrarCentros();
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
    MostrarCiudades();
    MostrarRedes();
  }, []);

  return (
    <Container>
      <div>
        <form>
          <Divinput>
            <Divinputlabel>
              <label>Nombre:</label>
              <Input  name="Nombre" type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Dirección:</label>
              <Input  name="Direccion" type="text" required value={direccion} onChange={(e) => SetDireccion(e.target.value)}/>
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Red de Salud:</label>
              <select value={id_redes} onChange={(e)=>setId_redes(e.target.value)} >
                {redes.map((v, i) => (
                  <option key={i} value={v.id}  >
                    {v.nombre}
                  </option>
                ))}
              </select>
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Teléfono:</label>
              <Input name="Telefono" type="number" value={telefono} required onChange={(e) => setTelefono(e.target.value)}/>
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Ciudad:</label>
              <select value={id_ciudad} onChange={(e)=>setId_ciudad(e.target.value)} >
                {ciudades.map((v, i) => (
                  <option key={i} value={v.id}  >
                    {v.ciudad}
                  </option>
                ))}
              </select>
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Área:</label>
              <Input name="Area" type="text" value={area} required onChange={(e) => setArea(e.target.value)}/>
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Seguimiento de Casos:</label>
              <Input name="Telefono" type="text" value={seguimiento_casos} required onChange={(e) => setSeguimiento_casos(e.target.value)}/>
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Contacto:</label>
              <Input name="Contacto" type="number" required value={contacto} onChange={(e) => setContacto(e.target.value)}/>
            </Divinputlabel>
          </Divinput>

          <Divboton>
            <Botonagregar type='submit' onClick={enviar} disabled={loading}>Registrar</Botonagregar>
          </Divboton>
        </form>
      </div>
    </Container>
  );
};

export default CentroForm;

const Container=styled.div`
`;
const Divinputlabel=styled.div`
  display: flex;
  flex-direction: column;
`;
const Divinput=styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  align-items: center;
`;
const Input=styled.input`
  margin-top: 5px;
  margin-bottom: 5px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,.3);
  outline: none;
  &:focus{
    border: 1.5px solid #034078;
  }

`;
const Divboton=styled.div`
  display: flex;
  justify-content: center;
`;
const Botonagregar=styled.button`
 padding: 10px;
 cursor: pointer;
 background:#034078;
 color: #fff;
 border-radius: 7px;
 &:hover{
  background: #0077b6;
 }
`;