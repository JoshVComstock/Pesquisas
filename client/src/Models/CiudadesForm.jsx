import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { postCiudad, updateCiudades } from "../services/Ciudades";

const CiudadesForm = ({getApi,ciudadactual,setCiudadactual,closeModal}) => {
  const [ciudad, setCiudad] = useState("");

  useEffect(() => {
    if (Object.keys(ciudadactual).length > 0) {
      setCiudad(ciudadactual.ciudad);
    }
    return () => {
      setCiudadactual({});
    };
  }, [ciudadactual]);
  
  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(ciudadactual).length > 0) {
      updateCiudades(
        {
          id: ciudadactual.id,
          ciudad: ciudad,
        },
        () => {
          setCiudad("");
          closeModal();
          setCiudadactual({});
          getApi();
        }
      );
    } else {
      postCiudad(ciudad, () => {
        setCiudad("");
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
                type="text"
                placholder="Ingrese Ciudad"
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divboton>
            <Botonagregar onClick={(e) => updatepost(e)}>
              {Object.keys(ciudadactual).length > 0 ? "Editar" : "Agregar"}
            </Botonagregar>
          </Divboton>
        </form>
      </div>
    </Container>
  );
};

export default CiudadesForm;

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
