import React from 'react'
import { useState, useEffect } from 'react';
import styled from "styled-components";

const LaboratoriosForm = ({MostrarLaboratorios}) => {
  const [nombre, setNombre] = useState("");
  const [direccion, SetDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [id_centros, setId_centros] = useState("");
  const [centros, setCentros] = useState([]);
  const [id_ciudades, setId_ciudades] = useState("");
  const [ciudades, setCiudades] = useState([]);
  const [id_redes, setId_redes] = useState("");
  const [redes, setRedes] = useState([]);
  const [loading, setLoading] = useState(false);

  const enviar = async (e) => {
    e.preventDefault();
    setLoading(true);
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
      MostrarLaboratorios();
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
    <Container>
        <div>
          <form  >
            <Divinput>
              <Divinputlabel>
                <label>Nombre</label>
                <Input name="Nombre" placeholder='Ingrese un Nombre' type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Dirección</label>
                <Input name="Direccion" placeholder='Ingrese una Dirección' type="text" required value={direccion} onChange={(e) => SetDireccion(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Teléfono</label>
                <Input name="Telefono" placeholder='Ingrese un Teléfono' type="text" required value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Centro de Salud</label>
                <select value={id_centros} onChange={(e) => setId_centros(e.target.value)} >
                  {centros.map((v, i) => (
                    <option key={i} value={v.id}  >
                      {v.nombre}
                    </option>
                  ))}
                </select>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Ciudad</label>
                <select value={id_ciudades} onChange={(e)=>setId_ciudades(e.target.value)} >
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
                <label>Red de Salud</label>
                <select value={id_redes} onChange={(e) => setId_redes(e.target.value)} >
                  {redes.map((v, i) => (
                    <option key={i} value={v.id}  >
                      {v.nombre}
                    </option>
                  ))}
                </select>
              </Divinputlabel>
            </Divinput>
            <Divboton>
              <Botonagregar type='submit' onClick={enviar} disabled={loading}>Agregar</Botonagregar>
            </Divboton>
          </form>
        </div>
    </Container>
  )
}

export default LaboratoriosForm

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