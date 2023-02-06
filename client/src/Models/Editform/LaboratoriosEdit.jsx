import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react';

const LaboratoriosEdit = ({laboratorioactual,MostrarLaboratorios}) => {
  const [nombre, setNombre] = useState(laboratorioactual.nombre);
  const [direccion, setDireccion] = useState(laboratorioactual.direccion);
  const [telefono, setTelefono] = useState(laboratorioactual.telefono);
  const [id_centros, setId_Centros] = useState(laboratorioactual.id_centros);
  const [id_ciudades, setId_Ciudades] = useState(laboratorioactual.id_ciudades);
  const [id_redes, setId_redes] = useState(laboratorioactual.id_redes);
  const [centros, setCentros] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  const [redes, setRedes] = useState([]);

  const Editar = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/laboratorios/"+laboratorioactual.id, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ciudad:ciudad
      }),
      
    });

    if ((response.ok)) {
      setNombre("");
      setDireccion("");
      setTelefono("");
      setId_Centros("");
      setId_Ciudades("");
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
                <Input type="text" placeholder='Ingrese Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Dirección</label>
                <Input type="text" placeholder='Ingrese Dirección' value={direccion} onChange={(e) => setDireccion(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Teléfono</label>
                <Input type="text" placeholder='Ingrese Teléfono' value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Centro de Salud</label>
                <select value={id_centros} onChange={(e) => setId_Centros(e.target.value)} >
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
                <select value={id_ciudades} onChange={(e)=>setId_Ciudades(e.target.value)} >
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
              <Botonagregar type='submit' onClick={Editar}>Editar</Botonagregar>
            </Divboton>
          </form>
        </div>
    </Container>
  )
}

export default LaboratoriosEdit

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