import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { UseFech } from "../hooks/useFech";

const Registro_provinciaForm = () => {
  const [hora, setHora] = useState([]);
  const [fecha, setFecha] = useState([]);
  const [id_provincias, setId_provincias] = useState("");
  const { data: provincias } = UseFech(getProvincias);

  const [id_municipios, setId_municipios] = useState("");
  const { data: municipios } = UseFech(getMunicipios);

  const [id_centros, setId_centros] = useState("");
  const { data: centros } = UseFech(getCentros);

  const [cantidad_recibida, setCantidad_recibida] = useState("");
  const [cantidad_entregada, setCantidad_entregada] = useState("");
  const [cod_tarjeta, setCod_tarjeta] = useState("");
  const [entregado_por, setEntregado_por] = useState("");
  const [telefono, setTelefono] = useState("");
  const [recibido_por, setRecibido_por] = useState("");

  useEffect(() => {
    if (Object.keys(registroactual).length > 0) {
      setHora(registroactual.hora);
      setFecha(registroactual.fecha);
      setCantidad_recibida(registroactual.cantidad_recibida);
      setCantidad_entregada(registroactual.cantidad_entregada);
      setCod_tarjeta(registroactual.cod_tarjeta);
      setEntregado_por(registroactual.entregado_por);
      setTelefono(registroactual.telefono);
      setRecibido_por(registroactual.recibido_por);
    }
    return () => {
      setRegistroactual({});
    };
  }, [registroactual]);

  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(registroactual).length > 0) {
      updateRegistroprovincias(
        {
          id: registroactual.id,
          hora: hora,
          fecha: fecha,
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
        id_provincias,
        id_municipios,
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
              <Input
                type="time"
                required
                value={hora}
                onChange={(e) => setHora(e.target.value)}
              />
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

              <select
                name="select"
                onChange={(e) => setId_centros(e.target.value)}
              >
                {centros.map((v, i) => (
                  <option key={i} value={v.id}>
                    {v.id_centros}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label> Municipio :</label>
              <select
                name="select"
                onChange={(e) => setId_municipios(e.target.value)}
              >
                {municipios.map((v, i) => (
                  <option key={i} value={v.id}>
                    {v.id_municipios}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label> Provincias :</label>
              <select
                name="select"
                onChange={(e) => setId_provincias(e.target.value)}
              >
                {provincias.map((v, i) => (
                  <option key={i} value={v.id}>
                    {v.id_provincias}
                  </option>
                ))}
              </select>
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
