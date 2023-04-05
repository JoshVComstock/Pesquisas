import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { postLaboratorio, updateLaboratorios } from "../services/Laboratorios";
import { UseFech } from "../hooks/useFech";
import { getProvincias } from "../services/provincias";
const LaboratoriosForm = ({
  getApi,
  actual,
  setLaboratorioactual,
  closeModal,
}) => {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [id_provincia, setId_provincia] = useState("");

  const { data: provin } = UseFech(getProvincias);

  useEffect(() => {
    if (Object.keys(actual).length > 0) {
      setNombre(actual.nombre);
      setDireccion(actual.direccion);
      setTelefono(actual.telefono);
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
          id_provincias: id_provincia,
        },
        () => {
          setLaboratorioactual({});
          setNombre("");
          setDireccion("");
          setTelefono("");
          closeModal();
          getApi();
        }
      );
    } else {
      postLaboratorio(nombre, direccion, telefono, id_provincia, () => {
        setNombre("");
        setDireccion("");
        setTelefono("");
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
              <label>Nombre</label>
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
              <label>Dirección</label>
              <Input
                name="Direccion"
                placeholder="Ingrese una Dirección"
                type="text"
                required
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Teléfono</label>
              <Input
                name="Telefono"
                placeholder="Ingrese un Teléfono"
                type="text"
                required
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Provincia</label>
              <Select
                value={id_provincia}
                onChange={(e) => setId_provincia(e.target.value)}
              >
                <option value="">Seleccione Provincia</option>
                {provin.map((v, i) => (
                  <option key={i} value={v.id}>
                    {v.provincia}
                  </option>
                ))}
              </Select>
            </Divinputlabel>
          </Divinput>
          <Divboton>
            <Botonagregar
              type="submit"
              onClick={(e) => {
                updatepost(e);
              }}
            >
              {Object.keys(actual).length > 0 ? "Editar" : "Agregar"}
            </Botonagregar>
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
