import React from "react";
import { useState, useEffect } from "react";
import { postLaboratorio, updateLaboratorios } from "../services/Laboratorios";
import { UseFech } from "../hooks/useFech";
import { getProvincias } from "../services/provincias";
const LaboratoriosForm = ({
  getApi,
  actual,
  setLaboratorioactual,
  closeModal,
}) => {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [id_provincia, setId_provincia] = useState("");

  const { data: provin } = UseFech(getProvincias);

  useEffect(() => {
    if (Object.keys(actual).length > 0) {
      setNombre(actual.nombre);
      setDireccion(actual.direccion);
      setTelefono(actual.telefono);
    }
    return () => {
      setLaboratorioactual({});
    };
  }, [actual]);

  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(actual).length > 0) {
      updateLaboratorios(
        {
          id: actual.id,
          nombre: nombre,
          direccion: direccion,
          telefono: telefono,
          id_provincias: id_provincia,
        },
        () => {
          setLaboratorioactual({});
          setNombre("");
          setDireccion("");
          setTelefono("");
          closeModal();
          getApi();
        }
      );
    } else {
      postLaboratorio(nombre, direccion, telefono, id_provincia, () => {
        setNombre("");
        setDireccion("");
        setTelefono("");
        getApi();
        closeModal();
      });
    }
  };
  return (
    <form>
      <section>
        <label>Nombre</label>
        <input
          name="Nombre"
          placeholder="Ingrese un Nombre"
          type="text"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </section>
      <section>
        <label>Dirección</label>
        <input
          name="Direccion"
          placeholder="Ingrese una Dirección"
          type="text"
          required
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
      </section>
      <section>
        <label>Teléfono</label>
        <input
          name="Telefono"
          placeholder="Ingrese un Teléfono"
          type="text"
          required
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </section>
      <section>
        <label>Provincia</label>
        <select
          value={id_provincia}
          onChange={(e) => setId_provincia(e.target.value)}
        >
          <option value="">Seleccione Provincia</option>
          {provin.map((v, i) => (
            <option key={i} value={v.id}>
              {v.provincia}
            </option>
          ))}
        </select>
      </section>
      <article>
        <button
          type="submit"
          onClick={(e) => {
            updatepost(e);
          }}
        >
          {Object.keys(actual).length > 0 ? "Editar" : "Agregar"}
        </button>
      </article>
    </form>
  );
};

export default LaboratoriosForm;
