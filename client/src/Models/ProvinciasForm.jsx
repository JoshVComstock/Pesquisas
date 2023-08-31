import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { UseFech } from "../hooks/useFech";
import InputValidation from "../components/app/inputvalidation";
import TextInput from "../components/app/textinput";
import { postProvincia, updateProvincia } from "../services/provincias";
import { getCiudades } from "../services/Ciudades";

const ProvinciasForm = ({
  getApi,
  provinciaactual,
  setProviciaactual,
  closeModal,
}) => {
  const [requiredValidation, setRequiredValidation] = useState(false);
  const [provincia, setProvincia] = useState("");
  const [id_ciudad, setId_ciudad] = useState("");
  const [ciudadcli, setciudadcli] = useState(true);
  const { data: ciudades } = UseFech(getCiudades);
  useEffect(() => {
    if (Object.keys(provinciaactual).length > 0) {
      setProvincia(provinciaactual.provincia);
    }
    return () => {
      setProviciaactual({});
    };
  }, [provinciaactual]);

  const updatepost = (e) => {
    e.preventDefault();

    if (Object.keys(provinciaactual).length > 0) {
      updateProvincia(
        {
          id: provinciaactual.id,
          provincia: provincia,
          id_ciudades: id_ciudad,
        },
        () => {
          setProvincia("");
          setProviciaactual({});
          getApi();
          closeModal();
        }
      );
    } else {
      postProvincia(provincia, id_ciudad, () => {
        setProvincia("");
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
              <TextInput
                type="text"
                placeholder="Ingrese una Provincia"
                value={provincia}
                onChange={setProvincia}
              />
              <InputValidation
                value={provincia}
                required={requiredValidation}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Ciudad</label>
              <Select onChange={(e) => setId_ciudad(e.target.value)}>
                <option>Seleccione ciudad</option>
                {ciudades.map((v, i) => (
                  <option key={i} value={v.id}>
                    {v.ciudad}
                  </option>
                ))}
              </Select>
            </Divinputlabel>
          </Divinput>
          <Divboton>
            <Botonagregar
              onClick={(e) => {
                updatepost(e);
              }}
            >
              {Object.keys(provincia).length > 0 ? "Editar" : "Agregar"}
            </Botonagregar>
          </Divboton>
        </form>
        {/* <AlertComponent /> */}
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
