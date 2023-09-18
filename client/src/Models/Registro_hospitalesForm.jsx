import React from "react";
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
        <form>
            <section>
              <label>Hora:</label>
              <input
                type="time"
                placeholder="Ingrese Hora"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
              />
            </section>
            <section>
              <label>Fecha:</label>
              <input
                type="date"
                placeholder="Ingrese Fecha"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </section>
            <section>
              <label>Red de Salud:</label>
              <select onChange={(e) => setId_redes(e.target.value)}>
                <option>Selecione Red</option>
                {redes.map((v, i) => (
                  <option key={i} value={v.id}>
                    {v.nombre}
                  </option>
                ))}
              </select>
            </section>
            <section>
              <label>Centro de Salud:</label>
              <select onChange={(e) => setId_centros(e.target.value)}>
                <option value="">Seleccione centro</option>
                {centros.map((v, i) => (
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
                placeholder="Ingrese C. Recibida"
                value={cantidad_recibida}
                onChange={(e) => setCantidad_recibida(e.target.value)}
              />
            </section>
            <section>
              <label>Cantidad Entregada:</label>
              <input
                type="number"
                placeholder="Ingrese C. Entregada"
                value={cantidad_entregada}
                onChange={(e) => setCantidad_entregada(e.target.value)}
              />
            </section>
            <section>
              <label>Código de Tarjeta:</label>
              <input
                type="text"
                placeholder="Ingrese Rango"
                value={cod_tarjeta}
                onChange={(e) => setCod_tarjeta(e.target.value)}
              />
            </section>
            <section>
              <label>Entregado por:</label>
              <input
                type="text"
                placeholder="Entregado por"
                value={entregado_por}
                onChange={(e) => setEntregado_por(e.target.value)}
              />
            </section>
            <section>
              <label>Teléfono:</label>
              <input
                type="number"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </section>
            <section>
              <label>Recibido por:</label>
              <input
                type="text"
                placeholder="Recibido por"
                value={recibido_por}
                onChange={(e) => setRecibido_por(e.target.value)}
              />
            </section>
          <article>
            <button onClick={() => enviar()}>
              Agregar
            </button>
          </article>
        </form>

  );
};

export default Registro_hospitalesForm;
