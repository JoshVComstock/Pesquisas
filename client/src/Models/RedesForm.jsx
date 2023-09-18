import React from 'react'
import styled from "styled-components";
import { useState, useEffect } from "react";
import { postRedes, updateRedes } from "../services/Redes";

const RedesForm = ({getApi,redactual,setRedactual,closeModal}) => {
  const [nombre, setNombre] = useState("");
  useEffect(() => {
    if (Object.keys(redactual).length > 0) {
      setNombre(redactual.nombre);
    }
    return () => {
      setRedactual({});
    };
  }, [redactual]);

  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(redactual).length > 0) {
      updateRedes(
        {
          id: redactual.id,
          nombre: nombre,
        },
        () => {
          setNombre("");
          closeModal();
          setRedactual({});
          getApi();
        }
      );
    } else {
      postRedes(nombre, () => {
        setNombre("");
        getApi();
        closeModal();
      });
    }
  };
  return (
          <form  >
            <section>
                <label>Nombre:</label>
                <input type="text" placeholder='Ingrese Red de Salud' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </section>
            <article>
              <button onClick={(e) => updatepost(e)}>
              {Object.keys(redactual).length > 0 ? "Editar" : "Agregar"}</button>
            </article>
          </form>
  )
}

export default RedesForm