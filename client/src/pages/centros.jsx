import React from 'react'
import { useState,useEffect } from 'react';
import styled from 'styled-components';

const Centros = () => {
  const [ciudades, setCiudades] = useState([]);
  
  async function mostrarciudades()
  {
    const response=await fetch('http://127.0.0.1:8000/api/ciudades',{
      method:'GET',
      headers:{
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    const respuesta=await response?.json();
    setCiudades(respuesta);
  }
  async function eliminarciudades(id)
  {
    const response=await fetch('http://127.0.0.1:8000/api/ciudades/'+id,{
      method:'DELETE',
      headers:{
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    if(response.ok) {
      mostrarciudades();
    }
  }
  useEffect(()=>{
    mostrarciudades();
  }, [])
  return (
    <div>
       <Thead>
            <tr>
              <Th>Codigo</Th>
              <Th>Paciente</Th>
              
              <Th>Acciones</Th>
            </tr>
          </Thead>
      {
          ciudades.map((v,i)=>(
            <body key={i} >
              <tr  >
                <Th>{v.id}</Th>
                <Th>{v.ciudad}</Th>
                 <th>
                  <button>Editar</button>
                  <button onClick={()=>eliminarciudades(v.id)}>Eliminar</button>
                </th>
              </tr>
            </body>
            ))
            }
    </div>
  )
};
export default Centros

const Thead=styled.div`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
`;
const Th=styled.th`
margin: 5px;
padding: 5px;
`;