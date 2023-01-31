import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';

export const EnfermedadesForm = () => {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [extra, setExtra] = useState("");

    const enviar = async (e) => {
        e.preventDefault();

        const response = await fetch("http://127.0.0.1:8000/api/enfermedades", {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify({
                nombre: nombre,
                descripcion: descripcion,
                extra: extra,
            }),
        });

        const respuesta = await response?.json();
        if ((respuesta.mensaje = "Creado satisfactoriamente")) {
            setNombre("");
            setDescripcion("");
            setExtra("");
        }
    };
    return (
        <div>
            <div>
                <div>
                    <h3>Ingrese una nueva Enfermedad</h3>
                </div>
                <form >
                    <div>
                        <label>Nombre:</label>
                        <input  type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div>
                        <label>Descripción:</label>
                        <input name="Descripcion" type="text" required value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                    </div>
                    <div>
                        <label>Extra:</label>
                        <input name="Extra" type="text" required value={extra} onChange={(e) => setExtra(e.target.value)} />
                    </div>
                </form>
                <div>
                    <button onClick={enviar}>Registrar</button>
                    <button>Cancelar</button>
                </div>
            </div>
        </div>
    )
}
export default EnfermedadesForm;