import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react';

const RegistroProvinciasEdit = ({ registroprovinciaactual, mostrarRegistroPro }) => {
    const [hora, setHora] = useState(registroprovinciaactual.hora);
    const [fecha, setFecha] = useState(registroprovinciaactual.fecha);
    const [id_provincias, setId_Provincias] = useState(registroprovinciaactual.id_provincias);
    const [id_municipios, setId_Municipios] = useState(registroprovinciaactual.id_municipios);
    const [id_centros, setId_Centros] = useState(registroprovinciaactual.id_centros);
    const [cantidad_recibida, setCantRecibida] = useState(registroprovinciaactual.cantidad_recibida);
    const [cantidad_entregada, setCantEntregada] = useState(registroprovinciaactual.cantidad_entregada);
    const [cod_tarjeta, setCodTarjeta] = useState(registroprovinciaactual.cod_tarjeta);
    const [entregado_por, setEntregado] = useState(registroprovinciaactual.entregado_por);
    const [telefono, setTelefono] = useState(registroprovinciaactual.telefono);
    const [recibido_por, setRecibido] = useState(registroprovinciaactual.recibido_por);
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
        <Container>
        <div>
          <form  >
            <Divinput>
              <Divinputlabel>
                <label>Hora:</label>
                <Input type="time" placeholder='Ingrese Hora' value={hora} onChange={(e) => setHora(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Fecha:</label>
                <Input type="date" placeholder='Ingrese Fecha' value={fecha} onChange={(e) => setFecha(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Provincia:</label>
                <select value={id_provincias} onChange={(e) => setId_Provincias(e.target.value)} >
                  {provincias.map((v, i) => (
                    <option key={i} value={v.id}  >
                      {v.provincia}
                    </option>
                  ))}
                </select>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Municipio:</label>
                <select value={id_municipios} onChange={(e) => setId_Municipios(e.target.value)} >
                  {municipios.map((v, i) => (
                    <option key={i} value={v.id}  >
                      {v.municipio}
                    </option>
                  ))}
                </select>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Centro:</label>
                <select value={id_centros} onChange={(e) => setId_Centros(e.target.value)} >
                  {centros.map((v, i) => (
                    <option key={i} value={v.id}  >
                      {v.nombre}
                    </option>
                  ))}
                </select>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Cantidad Recibida:</label>
                <Input type="number" placeholder='Ingrese C. Recibida' value={cantidad_recibida} onChange={(e) => setCantRecibida(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Cantidad Entregada:</label>
                <Input type="number" placeholder='Ingrese C. Entregada' value={cantidad_entregada} onChange={(e) => setCantEntregada(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Código de Tarjeta:</label>
                <Input type="text" placeholder='Ingrese Rango' value={cod_tarjeta} onChange={(e) => setCodTarjeta(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Entregado por:</label>
                <Input type="text" placeholder='Entregado por' value={entregado_por} onChange={(e) => setEntregado(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Teléfono:</label>
                <Input type="number" placeholder='Ingrese un Teléfono' value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Recibido por:</label>
                <Input type="text" placeholder='Recibido por' value={recibido_por} onChange={(e) => setRecibido(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divboton>
              <Botonagregar type='submit' onClick={Editar}>Editar</Botonagregar>
            </Divboton>
          </form>
        </div>
    </Container>
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