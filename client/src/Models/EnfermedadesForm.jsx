import React from 'react'
import styled from "styled-components";
import { useState, useEffect } from "react";
import { postEnfermedades, updateEnfermedades } from "../services/Enfermedades";


export const EnfermedadesForm = ({ getApi, enfermedadactual, setEnfermedadactual, closeModal }) => {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [extra, setExtra] = useState("");

    useEffect(() => {
        if (Object.keys(enfermedadactual).length > 0) {
            setNombre(enfermedadactual.nombre);
            setDescripcion(enfermedadactual.descripcion);
            setExtra(enfermedadactual.extra);
        }
        return () => {
            setEnfermedadactual({});
        };
    }, [enfermedadactual]);

    const updatepost = (e) => {
        e.preventDefault();
        if (Object.keys(enfermedadactual).length > 0) {
            updateEnfermedades(
                {
                    id: enfermedadactual.id,
                    nombre: nombre,
                    descripcion: descripcion,
                    extra: extra,
                },
                () => {
                    setNombre("");
                    setDescripcion("");
                    setExtra("");
                    closeModal();
                    setEnfermedadactual({});
                    getApi();
                }
            );
        } else {
            postEnfermedades(nombre, descripcion, extra, () => {
                setNombre("");
                setDescripcion("");
                setExtra("");
                getApi();
                closeModal();
            });
        }
    };

    return (
        <Container>
            <div>
                <form  >
                    <Divinput>
                        <Divinputlabel>
                            <label>Nombre:</label>
                            <Input type="text" placeholder='Ingrese un Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </Divinputlabel>
                    </Divinput>
                    <Divinput>
                        <Divinputlabel>
                            <label>Descripción:</label>
                            <Input type="text" placeholder='Ingrese una Descripción' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                        </Divinputlabel>
                    </Divinput>
                    <Divinput>
                        <Divinputlabel>
                            <label>Extra:</label>
                            <Input type="text" placeholder='Ingrese un Extra' value={extra} onChange={(e) => setExtra(e.target.value)} />
                        </Divinputlabel>
                    </Divinput>
                    <Divboton>
                        <Botonagregar onClick={(e) => updatepost(e)}>
                            {Object.keys(enfermedadactual).length > 0 ? "Editar" : "Agregar"}</Botonagregar>
                    </Divboton>
                </form>
            </div>
        </Container>
    )
}
export default EnfermedadesForm;
const Container = styled.div`
`;
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
  border: 1px solid rgba(0,0,0,.3);
  outline: none;
  &:focus{
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
 background:#034078;
 color: #fff;
 border-radius: 7px;
 &:hover{
  background: #0077b6;
 }
`;