import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react';

const MunicipiosEdit = ({municipioactual,MostrarMunicipios}) => {
  const [municipio, setMunicipio] = useState(municipioactual.municipio);
  const [id_ciudades, setId_Ciudades] = useState(municipioactual.id_ciudades);
  const [ciudades, setCiudades] = useState([]);
  
  const Editar = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/municipios/"+municipioactual.id, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        municipio: municipio,
        id_ciudades: id_ciudades
      }),
    });

    if ((response.ok)) {
      setMunicipio("");
      setId_Ciudades("");
      MostrarMunicipios();
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
    <Container>
        <div>
          <form  >
            <Divinput>
              <Divinputlabel>
                <label>Nombre:</label>
                <Input type="text" placeholder='Ingrese un Municipio' value={municipio} onChange={(e) => setMunicipio(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Ciudad:</label>
                <select value={id_ciudades} onChange={(e)=>setId_Ciudades(e.target.value)} >
                  {ciudades.map((v, i) => (
                    <option key={i} value={v.id}  >
                      {v.ciudad}
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

export default MunicipiosEdit

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