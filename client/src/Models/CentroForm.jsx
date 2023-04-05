import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import { getCiudades } from "../services/Ciudades";
import { postCentros, updateCentros } from "../services/centros";
import { getMunicipios } from "../services/Municipios";

const CentroForm = ({ getApi, centroactual, setCentroactual, closeModal }) => {
  const [nombre, setNombre] = useState("");
  const [direccion, SetDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [id_municipios, setId_municipios] = useState("");
  const { data: municipios } = UseFech(getMunicipios);
  const [area, setArea] = useState("");
  const [seguimiento_casos, setSeguimiento_casos] = useState("");
  const [contacto, setContacto] = useState("");

  useEffect(() => {
    if (Object.keys(centroactual).length > 0) {
      setNombre(centroactual.nombre);
      SetDireccion(centroactual.direccion);
      setTelefono(centroactual.telefono);
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
          telefono: telefono,
          id_municipios: id_municipios,
          area: area,
          seguimiento_casos: seguimiento_casos,
          contacto: contacto,
        },
        () => {
          setNombre("");
          SetDireccion("");
          setTelefono("");
          setId_municipios("");
          setArea("");
          setSeguimiento_casos("");
          setContacto("");
          closeModal();
          setCentroactual({});
          getApi();
        }
      );
    } else {
      postCentros(
        nombre,
        direccion,
        telefono,
        id_municipios,
        area,
        seguimiento_casos,
        contacto,
        () => {
          setNombre("");
          SetDireccion("");
          setTelefono("");
          setId_municipios("");
          setArea("");
          setSeguimiento_casos("");
          setContacto("");
          getApi();
          closeModal();
        }
      );
    }
  };

  return (
    <Container>
      <div>
        <form>
          <Divinput>
            <Divinputlabel>
              <label>Nombre:</label>
              <Input
                name="Nombre"
                placeholder="Ingrese un Nombre"
                type="text"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Dirección:</label>
              <Input
                name="Direccion"
                placeholder="Ingrese una Dirección"
                type="text"
                required
                value={direccion}
                onChange={(e) => SetDireccion(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Municipio:</label>
              <Select
                value={id_municipios}
                onChange={(e) => setId_municipios(e.target.value)}
              >
                <option> Seleccione una municipio </option>
                {municipios.map((v, i) => (
                  <option key={i} value={v.id}>
                    {v.municipio}
                  </option>
                ))}
              </Select>
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Teléfono:</label>
              <Input
                name="Telefono"
                placeholder="Ingrese un Teléfono"
                type="number"
                value={telefono}
                required
                onChange={(e) => setTelefono(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Área:</label>
              <Input
                name="Area"
                placeholder="Ingrese una Área"
                type="text"
                value={area}
                required
                onChange={(e) => setArea(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Seguimiento de Casos:</label>
              <Input
                name="Telefono"
                placeholder="Seguimiento de Casos"
                type="text"
                value={seguimiento_casos}
                required
                onChange={(e) => setSeguimiento_casos(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Contacto:</label>
              <Input
                name="Contacto"
                placeholder="Ingrese un Contacto"
                type="number"
                required
                value={contacto}
                onChange={(e) => setContacto(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>

          <Divboton>
            <Botonagregar onClick={(e) => updatepost(e)}>
              {Object.keys(centroactual).length > 0 ? "Editar" : "Agregar"}
            </Botonagregar>
          </Divboton>
        </form>
      </div>
    </Container>
  );
};

export default CentroForm;

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
  a
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
const Botonagregar = styled.button`
  padding: 10px;
  cursor: pointer;
  background: #034078;
  color: #fff;
  border-radius: 7px;
  &:hover {
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
