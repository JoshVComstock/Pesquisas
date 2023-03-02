import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { postCiudad, updateCiudades } from "../services/Ciudades";
import "../pages/css/Centros.css";
import { UseFech } from "../hooks/useFech";
import { getCiudades } from "../services/Ciudades";
import { getRedes } from "../services/Redes";

const CentroForm = ({getApi,centroactual,setCentroactual,closeModal}) => {
  const [nombre, setNombre] = useState("");
  const [direccion, SetDireccion] = useState("");
  const [id_redes, setId_redes] = useState("");
  const { data: ciudades } = UseFech(getCiudades);
  const [telefono, setTelefono] = useState("");
  const [id_ciudad, setId_ciudad] = useState("");
  const { data: redes } = UseFech(getRedes);
  const [area, setArea] = useState("");
  const [seguimiento_casos, setSeguimiento_casos] = useState("");
  const [contacto, setContacto] = useState("");

  useEffect(() => {
    if (Object.keys(centroactual).length > 0) {
      setNombre(centroactual.nombre);
      SetDireccion(centroactual.direccion);
      setId_redes(centroactual.id_redes);
      setTelefono(centroactual.telefono);
      setId_ciudad(centroactual.id_ciudad);
      setArea(centroactual.area);
      setSeguimiento_casos(centroactual.seguimiento_casos);
      setContacto(centroactual.contacto);
    }
    return () => {
      setCentroactual({});
    };
  }, [centroactual]);
  
  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(centroactual).length > 0) {
      updateCentros(
        {
          id: centroactual.id,
          nombre: nombre,
          direccion: direccion,
          id_redes: id_redes,
          telefono: telefono,
          id_ciudad: id_ciudad,
          area: area,
          seguimiento_casos: seguimiento_casos,
          contacto: contacto,

        },
        () => {
          setNombre("");
          SetDireccion("");
          setId_redes("");
          setTelefono("");
          setId_ciudad("");
          setArea("");
          setSeguimiento_casos("");
          setContacto("");
          closeModal();
          setCentroactual({});
          getApi();
        }
      );
    } else {
      postCentro(nombre,direccion,id_redes,telefono,id_ciudad,area,seguimiento_casos,contacto, () => {
        setNombre("");
        SetDireccion("");
        setId_redes("");
        setTelefono("");
        setId_ciudad("");
        setArea("");
        setSeguimiento_casos("");
        setContacto("");
        getApi();
        closeModal();
      });
    }
  };

  return (
    <Container>
      <div>
        <form>
          <Divinput>
            <Divinputlabel>
              <label>Nombre:</label>
              <Input  name="Nombre" placeholder="Ingrese un Nombre" type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Dirección:</label>
              <Input  name="Direccion" placeholder="Ingrese una Dirección" type="text" required value={direccion} onChange={(e) => SetDireccion(e.target.value)}/>
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
              <Input name="Telefono" placeholder="Ingrese un Teléfono" type="number" value={telefono} required onChange={(e) => setTelefono(e.target.value)}/>
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
              <Input name="Area" placeholder="Ingrese una Área" type="text" value={area} required onChange={(e) => setArea(e.target.value)}/>
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Seguimiento de Casos:</label>
              <Input name="Telefono" placeholder="Seguimiento de Casos" type="text" value={seguimiento_casos} required onChange={(e) => setSeguimiento_casos(e.target.value)}/>
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Contacto:</label>
              <Input name="Contacto" placeholder="Ingrese un Contacto" type="number" required value={contacto} onChange={(e) => setContacto(e.target.value)}/>
            </Divinputlabel>
          </Divinput>

          <Divboton>
            <Botonagregar onClick={(e) => updatepost(e)}>
              {Object.keys(centroactual).length > 0 ? "Editar" : "Agregar"}</Botonagregar>
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