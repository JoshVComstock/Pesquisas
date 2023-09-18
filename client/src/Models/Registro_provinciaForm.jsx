import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { UseFech } from "../hooks/useFech";
import {
  postRegistroprovincia,
  updateRegistroprovincias,
} from "../services/Registroprovincias";
import { getCentros } from "../services/centros";
const Registro_provinciaForm = ({
  getApi,
  registroactuald,
  setRegistroactual,
  closeModal,
}) => {
  const [hora, setHora] = useState("");
  const [fecha, setFecha] = useState("");
  const [id_centros, setId_centros] = useState();
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

  const updateposts = (e) => {
    e.preventDefault();
    if (Object.keys(registroactuald).length > 0) {
      updateRegistroprovincias(
        {
          id: registroactuald.id,
          hora: hora,
          fecha: fecha,
          id_centros: id_centros,
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
    <form>
      <section>
        <label>Hora:</label>
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />
      </section>
      <section>
        <label>Fecha:</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </section>
      <section>
        <label>centros</label>
        <select onChange={(e) => setId_centros(e.target.value)}>
          <option>Seleccione un centro</option>
          {centrosa.map((v, i) => (
            <option key={i} value={v.id}>
              {v.nombre}
            </option>
          ))}
        </select>
      </section>
      <section>
        <label>Cantidad Recibida:</label>
        <input
          type="number"
          value={cantidad_recibida}
          onChange={(e) => setCantidad_recibida(e.target.value)}
        />
      </section>
      <section>
        <label>Cantidad entregada:</label>
        <input
          type="number"
          value={cantidad_entregada}
          onChange={(e) => setCantidad_entregada(e.target.value)}
        />
      </section>
      <section>
        <label>Codigo Targeta:</label>
        <input
          type="text"
          value={cod_tarjeta}
          onChange={(e) => setCod_tarjeta(e.target.value)}
        />
      </section>
      <section>
        <label>Entregado por :</label>
        <input
          type="text"
          value={entregado_por}
          onChange={(e) => setEntregado_por(e.target.value)}
        />
      </section>
      <section>
        <label>Telefono :</label>
        <input
          type="number"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </section>
      <section>
        <label>Recivido por :</label>
        <input
          type="text"
          value={recibido_por}
          onChange={(e) => setRecibido_por(e.target.value)}
        />
      </section>
      <article>
        <button onClick={(e) => updateposts(e)}>
          {Object.keys(registroactuald).length > 0 ? "Editar" : "Agregar"}
        </button>
      </article>
    </form>
  );
};

export default Registro_provinciaForm;
