import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { UseFech } from "../hooks/useFech";
import { getProvincias } from "../services/provincias";
import { getCiudades } from "../services/Ciudades";

const ProvinciasForm = ({
  getApi,
  provinciaactual,
  setProviciaactual,
  closeModal,
}) => {
  const [provincia, setProvincia] = useState("");
  const [id_ciudad, setId_ciudad] = useState("");
  const { data: ciudades } = UseFech(getCiudades);

  const updatepost = () => {
    if (Object.key(provinciaactual).length > 0) {
    } else {
    }
  };
  useEffect(() => {
    if (Object.keys(provinciaactual).length > 0) {
      setProvincia(provinciaactual.provincia);
    }
    return () => {
      setProviciaactual({});
    };
  }, [provinciaactual]);

  return (
    <Container>
      <div>
        <form>
          <Divinput>
            <Divinputlabel>
              <label>Nombre</label>
              <Input
                type="text"
                placeholder="Ingrese una Provincia"
                value={provincia}
                onChange={(e) => setProvincia(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Ciudad</label>
              <select onChange={(e) => setId_ciudad(e.target.value)}>
                {ciudades.map((v, i) => (
                  <option key={i} value={v.id}>
                    {v.ciudad}
                  </option>
                ))}
              </select>
            </Divinputlabel>
          </Divinput>
          <Divboton>
            <Botonagregar type="submit">Agregar</Botonagregar>
          </Divboton>
        </form>
      </div>
    </Container>
  );
};

export default ProvinciasForm;

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
