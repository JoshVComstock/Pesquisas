import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { postMunicipios, updateMunicipios } from "../services/Municipios";
import { UseFech } from "../hooks/useFech";
import { getCiudades } from "../services/Ciudades";

const MunicipiosForm = ({
  getApi,
  municipioactual,
  setMunicipioactual,
  closeModal,
}) => {

 const [municipio, setMunicipio] = useState("");
  const [id_ciudades, setId_ciudades] = useState("");
  const { data: ciudad } = UseFech(getCiudades);

  useEffect(() => {
    if (Object.keys(municipioactual).length > 0) {
      setMunicipio(municipioactual.municipio);
    }
    return () => {
      setMunicipioactual({});
    };
  }, [municipioactual]);
  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(municipioactual).length > 0) {
      updateMunicipios(
        {
          id: municipioactual.id,
          municipio: municipio,
        },
        () => {
          setMunicipio("");
          closeModal();
          setMunicipioactual({});
          getApi();
        }
      );
    } else {
      postMunicipios(municipio, id_ciudades, () => {
        setMunicipio("");
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
              <label>Municipio:</label>
              <Input
                type="text"
                placeholder="Ingrese un Municipio"
                value={municipio}
                onChange={(e) => setMunicipio(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Ciudad</label>
              <select onChange={(e) => setId_ciudades(e.target.value)}>
                {ciudad.map((v, i) => (
                  <option key={i} value={v.id}>
                    {v.ciudad}
                  </option>
                ))}
              </select>
            </Divinputlabel>
          </Divinput>
          <Divboton>
            <Botonagregar  onClick={(e) => updatepost(e)}>
              {Object.keys(municipioactual).length > 0 ? "Editar" : "Agregar"}
            </Botonagregar>
          </Divboton>
        </form>
      </div>
    </Container>
  );
};

export default MunicipiosForm;

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
