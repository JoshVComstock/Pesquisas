import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

import { postLaboratorio, updateLaboratorios } from "../services/Laboratorios";
import { getRedes } from "../services/Redes";
import { getCiudades } from "../services/Ciudades";
import { getCentros } from "../services/centros";
import { UseFech } from "../hooks/useFech";
const LaboratoriosForm = ({
  getApi,
  actual,
  setLaboratorioactual,
  closeModal,
}) => {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  // 
  const [id_centros, setId_centros] = useState("");
  const [id_ciudades, setId_ciudades] = useState("");
  const [id_redes, setId_redes] = useState("");


  const { loading, res } = UseFech(getRedes, getCiudades, getCentros);

  useEffect(() => {
    if (Object.keys(actual).length > 0) {
      setNombre(actual.nombre);
      setDireccion(actual.direccion);
      setTelefono(actual.telefono);
      setId_centros(actual.id_centros);
      setId_ciudades(actual.id_ciudades);
      setId_redes(actual.id_redes);
    }
    return () => {
      setLaboratorioactual({});
    };
  }, [actual]);

  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(actual).length > 0) {
      updateLaboratorios(
        {
          id: actual.id,
          nombre: nombre,
          direccion: direccion,
          telefono: telefono,
          id_centros: id_centros,
          id_ciudades: id_ciudades,
          id_redes: id_redes,
        },
        () => {
          setLaboratorioactual({});
          setNombre("");
          setDireccion("");
          setTelefono("");
          setId_centros("");
          setId_ciudades("");
          setId_redes("");
          closeModal();

          getApi();
        }
      );
    } else {
      postLaboratorio(
        nombre,
        direccion,
        telefono,
        id_centros,
        id_ciudades,
        id_redes,
        () => {
          setNombre("");
          setDireccion("");
          setTelefono("");
          setId_centros("");
          id_ciudades("");
          id_redes("");
          getApi();
          closeModal();
        }
      );
    }
  };

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
                <Select value={id_centros} onChange={(e) => setId_centros(e.target.value)} >
                  <option value="">Seleccione Centro</option>
                  {centros.map((v, i) => (
                    <option key={i} value={v.id}  >
                      {v.nombre}
                    </option>
                  ))}
                </Select>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Ciudad</label>
                <Select value={id_ciudades} onChange={(e)=>setId_ciudades(e.target.value)} >
                  <option value="">Seleccione Ciudad</option>
                  {ciudades.map((v, i) => (
                    <option key={i} value={v.id}  >
                      {v.ciudad}
                    </option>
                  ))}
                </Select>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Red de Salud</label>
                <Select value={id_redes} onChange={(e) => setId_redes(e.target.value)} >
                  <option value="">Seleccione Red</option>
                  {redes.map((v, i) => (
                    <option key={i} value={v.id}  >
                      {v.nombre}
                    </option>
                  ))}
                </Select>
              </Divinputlabel>
            </Divinput>
            <Divboton>
              <Botonagregar type='submit' onClick={enviar} disabled={loading}>Agregar</Botonagregar>
            </Divboton>
          </form>
        </div>
    </Container>
  );
};

export default LaboratoriosForm;

const Container = styled.div``;
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
  border: 1px solid rgba(0, 0, 0, 0.3);
  outline: none;
  &:focus {
    border: 1.5px solid #034078;
  }
`;
const Divboton = styled.div`
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
const Select = styled.select`
  width: 180px;
  outline: none;
  font-size: 16px;
  padding: 5px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;
