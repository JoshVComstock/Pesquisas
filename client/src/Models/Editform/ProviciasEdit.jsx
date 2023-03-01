import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react';

const ProviciasEdit = ({provinciaactual,MostrarProvincias}) => {
  const [provincia, setProvincia] = useState(provinciaactual.provincia);
  const [id_ciudad, setId_Ciudad] = useState(provinciaactual.id_ciudades);
  const [ciudades, setCiudades] = useState([]);
  
  const Editar = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/provincias/"+provinciaactual.id, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        provincia: provincia,
        id_ciudad: id_ciudad
      }),
    });

    if ((response.ok)) {
      setProvincia("");
      setId_Ciudad("");
      MostrarProvincias();
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
                <Input type="text" placeholder='Ingrese una Provincia' value={provincia} onChange={(e) => setProvincia(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Ciudad:</label>
                <select value={id_ciudad} onChange={(e)=>setId_Ciudad(e.target.value)} >
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

export default ProviciasEdit

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
