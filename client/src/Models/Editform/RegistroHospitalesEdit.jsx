import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react';

const RegistroHospitalesEdit = ({ registrohospitalactual, MostrarReHospitales }) => {
    const [hora, setHora] = useState(registrohospitalactual.hora);
    const [fecha, setFecha] = useState(registrohospitalactual.fecha);
    const [id_redes, setId_Redes] = useState(registrohospitalactual.id_redes);
    const [id_centros, setId_Centros] = useState(registrohospitalactual.id_centros);
    const [cantidad_recibida, setCantRecibida] = useState(registrohospitalactual.cantidad_recibida);
    const [cantidad_entregada, setCantEntregada] = useState(registrohospitalactual.cantidad_entregada);
    const [cod_tarjeta, setCodTarjeta] = useState(registrohospitalactual.cod_tarjeta);
    const [entregado_por, setEntregado] = useState(registrohospitalactual.entregado_por);
    const [telefono, setTelefono] = useState(registrohospitalactual.telefono);
    const [recibido_por, setRecibido] = useState(registrohospitalactual.recibido_por);
    const [redes, setRedes] = useState([]);
    const [centros, setCentros] = useState([]);

    const Editar = async (e) => {
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:8000/api/registro_hospitales/" + registrohospitalactual.id, {
            method: "PUT",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify({
                hora: hora,
                fecha: fecha,
                id_redes: id_redes,
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
            setId_Redes("");
            setId_Centros("");
            setCantRecibida("");
            setCantEntregada("");
            setCodTarjeta("");
            setEntregado("");
            setTelefono();
            setRecibido("");
            MostrarReHospitales();
        }
    };
    async function MostrarRedes() {
        const response = await fetch("http://127.0.0.1:8000/api/redes", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
            },
        });
        const respuesta = await response?.json();
        setRedes(respuesta);

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
        MostrarRedes();
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
                <label>Red de Salud:</label>
                <select value={id_redes} onChange={(e) => setId_Redes(e.target.value)} >
                  {redes.map((v, i) => (
                    <option key={i} value={v.id}  >
                      {v.nombre}
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
            <Divboton>
              <Botonagregar type='submit' onClick={Editar}>Editar</Botonagregar>
            </Divboton>
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
                <Input type="number" placeholder='Teléfono' value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
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

export default RegistroHospitalesEdit

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