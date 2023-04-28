import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { UseFech } from "../hooks/useFech";
import { postRegistroprovincia ,updateRegistroprovincias} from "../services/Registroprovincias";
import {getCentros} from "../services/centros"
const Registro_provinciaForm = ({getApi,registroactuald,setRegistroactual,closeModal}) => {

  const [hora, setHora] = useState("");
  const [fecha, setFecha] = useState("");
  const [id_centros, setId_centros] = useState("");
  const { data: centrosa } = UseFech(getCentros);
  const [cantidad_recibida, setCantidad_recibida] = useState("");
  const [cantidad_entregada, setCantidad_entregada] = useState("");
  const [cod_tarjeta, setCod_tarjeta] = useState("");
  const [entregado_por, setEntregado_por] = useState("");
  const [telefono, setTelefono] = useState("");
  const [recibido_por, setRecibido_por] = useState("");

  useEffect(() => {
    if (Object.keys(registroactuald).length > 0) {
      setHora(registroactuald.hora);
      setFecha(registroactuald.fecha);
      setCantidad_recibida(registroactuald.cantidad_recibida);
      setCantidad_entregada(registroactuald.cantidad_entregada);
      setCod_tarjeta(registroactuald.cod_tarjeta);
      setEntregado_por(registroactuald.entregado_por);
      setTelefono(registroactuald.telefono);
      setRecibido_por(registroactuald.recibido_por);
    }
    return () => {
      setRegistroactual({});
    };
  }, [registroactuald]);

  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(registroactuald).length > 0) {
      updateRegistroprovincias(
        {
          id: registroactuald.id,
          hora: hora,
          fecha: fecha,
          id_centros:id_centros,
          cantidad_recibida: cantidad_recibida,
          cantidad_entregada: cantidad_entregada,
          cod_tarjeta: cod_tarjeta,
          entregado_por: entregado_por,
          telefono: telefono,
          recibido_por: recibido_por,
        },
        () => {
          setHora("");
          setFecha("");
          setCantidad_recibida("");
          setCantidad_entregada("");
          setCod_tarjeta("");
          setEntregado_por("");
          setTelefono("");
          setRecibido_por("");
          closeModal();
          setRegistroactual({});
          getApi();
        }
      );
    } else {
      postRegistroprovincia(
        hora,
        fecha,
        id_centros,
        cantidad_recibida,
        cantidad_entregada,
        cod_tarjeta,
        entregado_por,
        telefono,
        recibido_por,
        () => {
          setHora("");
          setFecha("");
          setCantidad_recibida("");
          setCantidad_entregada("");
          setCod_tarjeta("");
          setEntregado_por("");
          setTelefono("");
          setRecibido_por("");
          closeModal();
          setRegistroactual({});
          getApi();
        }
      );
    }
  };
  return (
    <Container>
      <div>
        <form>
          <div>
            <div>
              <label htmlFor="">hora </label>
              <Input type="time" placeholder='Ingrese Hora' value={hora} onChange={(e) => setHora(e.target.value)}/>
             
            </div>
            <div>
              <label htmlFor="">fecha </label>
              <Input
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>
            <div>
              <label>Centro de Salud:</label>

              <Select
                value={id_centros}
                onChange={(e) => setId_centros(e.target.value)}
              >
                <option value="">Seleccione el centro</option>
                {centrosa.map((v, i) => (
                   <option key={i} value={v.id}>
                   {v.nombre}
                 </option>
                 
                ))}
              </Select>
            </div>
           

            {/* ----------- */}
            <div>
              <label htmlFor="">cantidad_recibida</label>
              <Input
                type="number"
                value={cantidad_recibida}
                onChange={(e) => setCantidad_recibida(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">cantidad_entregada,</label>
              <Input
                type="number"
                value={cantidad_entregada}
                onChange={(e) => setCantidad_entregada(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">cod_tarjeta,</label>
              <Input
                type="number"
                value={cod_tarjeta}
                onChange={(e) => setCod_tarjeta(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">entregado_por</label>
              <Input
                type="text"
                value={entregado_por}
                onChange={(e) => setEntregado_por(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">telefono</label>
              <Input
                type="number"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">recibido_por</label>
              <Input
                type="text"
                value={recibido_por}
                onChange={(e) => setRecibido_por(e.target.value)}
              />
            </div>
          </div>
          <Botonagregar  onClick={(e) => updatepost(e)}>
              {Object.keys(registroactual).length > 0 ? "Editar" : "Agregar"}
            </Botonagregar>
        </form>
      </div>
    </Container>
  );
};

export default Registro_provinciaForm;

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