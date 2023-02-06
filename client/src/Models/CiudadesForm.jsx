import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';

const CiudadesForm = ({mostrarciudades}) => {
  // declaramos una variable
  const [ciudad, setCiudad] = useState("");
  const [loading, setLoading] = useState(false);
  
  const enviar = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("http://127.0.0.1:8000/api/ciudades", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ciudad: ciudad
      }),
      
    });

    const respuesta = await response?.json();
    if ((respuesta.mensaje = "Creado satisfactoriamente")) {
      setCiudad(" ");
      mostrarciudades();
    }
  };
  return (
    <Container>
        <div>
          <form  >
            <Divinput>
              <Divinputlabel>
              <label>Nombre</label>
                <Input type="text" placholder='Ingrese Ciudad' value={ciudad} onChange={(e) => setCiudad(e.target.value)}/>
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

export default CiudadesForm

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