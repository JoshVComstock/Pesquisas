import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import { getRedes } from "../services/Redes";
import { getCentros } from "../services/centros";

const Registro_hospitalesForm = ({ MostrarReHospitales }) => {
  const [hora, setHora] = useState("");
  const [fecha, setFecha] = useState("");
  const [id_redes, setId_redes] = useState();
  const [id_centros, setId_centros] = useState();
  const [cantidad_recibida, setCantidad_recibida] = useState();
  const [cantidad_entregada, setCantidad_entregada] = useState();
  const [cod_tarjeta, setCod_tarjeta] = useState("");
  const [entregado_por, setEntregado_por] = useState("");
  const [telefono, setTelefono] = useState();
  const [recibido_por, setRecibido_por] = useState("");
  const { data: redes } = UseFech(getRedes);
  const { data: centros } = UseFech(getCentros);
  console.log(hora);
  console.log(fecha);
  console.log(id_redes);
  console.log(id_centros);
  console.log(cantidad_recibida);
  console.log(cantidad_entregada);
  console.log(cod_tarjeta);
  console.log(entregado_por);
  console.log(telefono);
  console.log(recibido_por);
  

  const enviar = async () => {
    const response = await fetch(
      "http://127.0.0.1:8000/api/registro_hospitales",
      {
        method: "POST",
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
      }
    );
    const respuesta = await response?.json();
    if (respuesta.ok) {
      setHora(" ");
      setFecha(" ");
      setId_redes(" ");
      setId_centros(" ");
      setCantidad_recibida(" ");
      setCantidad_entregada(" ");
      setCod_tarjeta(" ");
      setEntregado_por(" ");
      setTelefono(" ");
      setRecibido_por(" ");
      MostrarReHospitales();
    }
  };
  return (
    <Container>
      <div>
        <form>
          <Divinput>
            <Divinputlabel>
              <label>Hora:</label>
              <Input
                type="time"
                placeholder="Ingrese Hora"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Fecha:</label>
              <Input
                type="date"
                placeholder="Ingrese Fecha"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Red de Salud:</label>
              <select onChange={(e) => setId_redes(e.target.value)}>
                <option>Selecione Red</option>
                {redes.map((v, i) => (
                  <option key={i} value={v.id}>
                    {v.nombre}
                  </option>
                ))}
              </select>
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Centro de Salud:</label>
              <select onChange={(e) => setId_centros(e.target.value)}>
                <option value="">Seleccione centro</option>
                {centros.map((v, i) => (
                  <option key={i} value={v.id}>
                    {v.nombre}
                  </option>
                ))}
              </select>
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Cantidad Recibida:</label>
              <Input
                type="number"
                placeholder="Ingrese C. Recibida"
                value={cantidad_recibida}
                onChange={(e) => setCantidad_recibida(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Cantidad Entregada:</label>
              <Input
                type="number"
                placeholder="Ingrese C. Entregada"
                value={cantidad_entregada}
                onChange={(e) => setCantidad_entregada(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Código de Tarjeta:</label>
              <Input
                type="text"
                placeholder="Ingrese Rango"
                value={cod_tarjeta}
                onChange={(e) => setCod_tarjeta(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Entregado por:</label>
              <Input
                type="text"
                placeholder="Entregado por"
                value={entregado_por}
                onChange={(e) => setEntregado_por(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Teléfono:</label>
              <Input
                type="number"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Recibido por:</label>
              <Input
                type="text"
                placeholder="Recibido por"
                value={recibido_por}
                onChange={(e) => setRecibido_por(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divboton>
            <Botonagregar onClick={() => enviar()}>
              Agregar
            </Botonagregar>
          </Divboton>
        </form>
      </div>
    </Container>
  );
};

export default Registro_hospitalesForm;

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
