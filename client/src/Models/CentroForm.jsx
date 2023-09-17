import React from "react";
import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import { postCentros, updateCentros } from "../services/centros";
import { getMunicipios } from "../services/Municipios";
import TextInput, { Input } from "../components/app/textinput";
import InputValidation from "../components/app/inputvalidation";
const CentroForm = ({ getApi, centroactual, setCentroactual, closeModal }) => {
  const [nombre, setNombre] = useState("");
  const [direccion, SetDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [id_municipios, setId_municipios] = useState("");
  const { data: municipios } = UseFech(getMunicipios);
  const [area, setArea] = useState("");
  const [seguimiento_casos, setSeguimiento_casos] = useState("");
  const [contacto, setContacto] = useState("");
  const [validacion, setValidacion] = useState(false);
  useEffect(() => {
    if (Object.keys(centroactual).length > 0) {
      setNombre(centroactual.nombre);
      SetDireccion(centroactual.direccion);
      setTelefono(centroactual.telefono);
      setArea(centroactual.area);
      setSeguimiento_casos(centroactual.seguimiento_casos);
      setContacto(centroactual.contacto);
    }
    return () => {
      setCentroactual({});
    };
  }, [centroactual]);

  const updatepost = (e) => {
    e.preventDefault();
    if (nombre.trim() === "") {
      setValidacion(true);
      return;
    } else if (direccion.trim() === "") {
      setValidacion(true);
      return;
    }
    if (Object.keys(centroactual).length > 0) {
      updateCentros(
        {
          id: centroactual.id,
          nombre: nombre,
          direccion: direccion,
          telefono: telefono,
          id_municipios: id_municipios,
          area: area,
          seguimiento_casos: seguimiento_casos,
          contacto: contacto,
        },
        () => {
          setNombre("");
          SetDireccion("");
          setTelefono("");
          setId_municipios("");
          setArea("");
          setSeguimiento_casos("");
          setContacto("");
          closeModal();
          setCentroactual({});
          getApi();
        }
      );
    } else {
      postCentros(
        nombre,
        direccion,
        telefono,
        id_municipios,
        area,
        seguimiento_casos,
        contacto,
        () => {
          setNombre("");
          SetDireccion("");
          setTelefono("");
          setId_municipios("");
          setArea("");
          setSeguimiento_casos("");
          setContacto("");
          getApi();
          closeModal();
        }
      );
    }
  };

  return (
    <>
      <form>
        <section>
          <div>
            <label>Nombre:</label>
            <TextInput
              name="Nombre"
              placeholder="Ingrese un Nombre"
              type="text"
              required
              value={nombre}
              onChange={setNombre}
            />
          </div>
          <InputValidation value={nombre} required={validacion} />
      
          <div>
            <label>Dirección:</label>
            <TextInput
              name="Direccion"
              placeholder="Ingrese una Dirección"
              type="text"
              required
              value={direccion}
              onChange={SetDireccion}
            />
          </div>
          <InputValidation value={direccion} required={validacion} />
       
        <div>
          <label>Municipio:</label>
          <select
            value={id_municipios}
            onChange={(e) => setId_municipios(e.target.value)}
          >
            <option> Seleccione una municipio </option>
            {municipios.map((v, i) => (
              <option key={i} value={v.id}>
                {v.municipio}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            name="Telefono"
            placeholder="Ingrese un Teléfono"
            type="number"
            value={telefono}
            required
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <InputValidation value={telefono} required={validacion} />
        <div>
          <label>Área:</label>
          <input
            name="Area"
            placeholder="Ingrese una Área"
            type="text"
            value={area}
            required
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        <div>
          <label>Seguimiento de Casos:</label>
          <input
            name="Telefono"
            placeholder="Seguimiento de Casos"
            type="text"
            value={seguimiento_casos}
            required
            onChange={(e) => setSeguimiento_casos(e.target.value)}
          />
        </div>
        <div>
          <label>Contacto:</label>
          <input
            name="Contacto"
            placeholder="Ingrese un Contacto"
            type="number"
            required
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
          />
        </div>
        </section>
        <div>
          <button onClick={(e) => updatepost(e)}>
            {Object.keys(centroactual).length > 0 ? "Editar" : "Agregar"}
          </button>
        </div>
      </form>
    </>
  );
};

export default CentroForm;
