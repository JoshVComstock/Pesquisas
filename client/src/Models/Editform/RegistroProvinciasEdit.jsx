import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react';

const RegistroProvinciasEdit = ({ registroporvinciaactual, mostrarRegistroPro }) => {
    const [hora, setHora] = useState(registroporvinciaactual.hora);
    const [fecha, setFecha] = useState(registroporvinciaactual.fecha);
    const [id_provincias, setId_Provincias] = useState(registroporvinciaactual.id_provincias);
    const [id_municipios, setId_Municipios] = useState(registroporvinciaactual.id_municipios);
    const [id_centros, setId_Centros] = useState(registroporvinciaactual.id_centros);
    const [cantidad_recibida, setCantRecibida] = useState(registroporvinciaactual.cantidad_recibida);
    const [cantidad_entregada, setCantEntregada] = useState(registroporvinciaactual.cantidad_entregada);
    const [cod_tarjeta, setCodTarjeta] = useState(registroporvinciaactual.cod_tarjeta);
    const [entregado_por, setEntregado] = useState(registroporvinciaactual.entregado_por);
    const [telefono, setTelefono] = useState(registroporvinciaactual.telefono);
    const [recibido_por, setRecibido] = useState(registroporvinciaactual.recibido_por);
    const [provincias, setProvincias] = useState([]);
    const [municipios, setMunicipios] = useState([]);
    const [centros, setCentros] = useState([]);

    const Editar = async (e) => {
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:8000/api/registro_provincias/" + registroporvinciaactual.id, {
            method: "PUT",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify({
                hora: hora,
                fecha: fecha,
                id_provincias: id_provincias,
                id_municipios: id_municipios,
                id_centros: id_centros,
                cantidad_recibida: cantidad_recibida,
                cantidad_entregada: cantidad_entregada,
                cod_tarjeta: cod_tarjeta,
                entregado_por: entregado_por,
                telefono: telefono,
                recibido_por: recibido_por,
            }),

        });

        if ((response.ok)) {
            setHora("");
            setFecha("");
            setId_Provincias("");
            setId_Municipios("");
            setId_Centros("");
            setCantRecibida("");
            setCantEntregada("");
            setCodTarjeta("");
            setEntregado("");
            setTelefono();
            setRecibido("");
            mostrarRegistroPro();
        }
    };

    async function MostrarProvincias() {
        const response = await fetch("http://127.0.0.1:8000/api/provincias", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
            },
        });
        const respuesta = await response?.json();
        setProvincias(respuesta);

    }

    async function MostrarMunicipios() {
        const response = await fetch("http://127.0.0.1:8000/api/municipios", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
            },
        });
        const respuesta = await response?.json();
        setMunicipios(respuesta);
    }
    async function MostrarCentros() {
        const response = await fetch("http://127.0.0.1:8000/api/centros", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
            },
        });
        const respuesta = await response?.json();
        setCentros(respuesta);
    }

    useEffect(() => {
        MostrarMunicipios();
        MostrarProvincias();
        MostrarCentros();
    }, []);
    return (
        <div>

        </div>
    )
}

export default RegistroProvinciasEdit

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