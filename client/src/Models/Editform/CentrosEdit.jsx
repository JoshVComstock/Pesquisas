import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react';

export const CentrosEdit = ({centroactual,MosrarCentros}) => {
  const [nombre, setNombre] = useState(centroactual.nombre);
  const [direccion, setDireccion] = useState(centroactual.direccion);
  const [id_redes, setId_Redes] = useState(centroactual.id_redes);
  const [telefono, setTelefono] = useState(centroactual.telefono);
  const [id_ciudades, setId_Ciudades] = useState(centroactual.id_ciudades);
  const [area, setArea] = useState(centroactual.area);
  const [seguimiento_casos, setSeguimiento] = useState(centroactual.seguimiento_casos);
  const [contacto, setContacto] = useState(centroactual.contacto);
  const [redes, setRedes] = useState([]);
  const [ciudades, setCiudades] = useState([]);

  const Editar = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/centros/"+centroactual.id, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        direccion: direccion,
        id_redes: id_redes,
        telefono: telefono,
        id_ciudades: id_ciudades,
        area: area,
        seguimiento_casos: seguimiento_casos,
        contacto: contacto,
      }),
      
    });

    if ((response.ok)) {
      setNombre("");
      setDireccion("");
      setId_Redes("");
      setTelefono("");
      setId_Ciudades("");
      setArea("");
      setSeguimiento("");
      setContacto("");
      MosrarCentros();
    }
  };

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
    MostrarRedes();
    MostrarCiudades();
  }, []);
  return (
    <Container>
        <div>
          <form  >
            <Divinput>
              <Divinputlabel>
                <label>Nombre:</label>
                <Input type="text" placeholder='Ingrese un Centro' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Dirección:</label>
                <Input type="text" placeholder='Ingrese un Centro' value={direccion} onChange={(e) => setDireccion(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Red de Salud:</label>
                <select value={id_redes} onChange={(e) => setId_Redes(e.target.value)} >
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
                <Input type="number" placeholder='Ingrese un Centro' value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Ciudad:</label>
                <select value={id_ciudades} onChange={(e) => setId_Ciudades(e.target.value)} >
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
                <label>Area:</label>
                <Input type="text" placeholder='Ingrese un Centro' value={area} onChange={(e) => setArea(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Seguimiento de Casos:</label>
                <Input type="text" placeholder='Ingrese un Centro' value={seguimiento_casos} onChange={(e) => setSeguimiento(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Contatcto:</label>
                <Input type="number" placeholder='Ingrese un Centro' value={contacto} onChange={(e) => setContacto(e.target.value)}/>
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

export default CentrosEdit

const Container = styled.div`
`;
const Divinputlabel = styled.div`
  display: flex;
  flex-direction: column;
`;
const Divinput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  align-items: center;
`;
const Input = styled.input`
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
const Divboton = styled.div`
  display: flex;
  justify-content: center;
`;
const Botonagregar = styled.button`
 padding: 10px;
 cursor: pointer;
 background:#034078;
 color: #fff;
 border-radius: 7px;
 &:hover{
  background: #0077b6;
 }
`;
