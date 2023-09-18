import React from "react";
import { useState, useEffect } from "react";
import { postMunicipios, updateMunicipios } from "../services/Municipios";
import { UseFech } from "../hooks/useFech";
import { getProvincias } from "../services/provincias";
import TextInput from "../components/app/textinput";
import InputValidation from "../components/app/inputvalidation";
const MunicipiosForm = ({
  getApi,
  municipioactual,
  setMunicipioactual,
  closeModal,
}) => {
  const [municipio, setMunicipio] = useState("");
  const [id_provincias, setId_provincias] = useState("");
  const { data: provincia } = UseFech(getProvincias);
  const [requiredValidation, setRequiredValidation] = useState(false);

  useEffect(() => {
    if (Object.keys(municipioactual).length > 0) {
      setMunicipio(municipioactual.municipio);
    }
    return () => {
      setMunicipioactual({});
    };
  }, [municipioactual]);

  const updatepost = (e) => {
    e.preventDefault();
    if (municipio.trim() === "") {
      setRequiredValidation(true);
      return;
    }
    if (Object.keys(municipioactual).length > 0) {
      updateMunicipios(
        {
          id: municipioactual.id,
          municipio: municipio,
          id_provincias: id_provincias,
        },
        () => {
          setMunicipio("");
          closeModal();
          setMunicipioactual({});
          getApi();
        }
      );
    } else {
      postMunicipios(municipio, id_provincias, () => {
        setMunicipio("");
        getApi();
        closeModal();
      });
    }
  };

  return (
    <form>
      <section>
          <label>Municipio:</label>
          <TextInput
            type="text"
            placeholder="Ingrese un Municipio"
            value={municipio}
            onChange={setMunicipio}
          />
        <InputValidation value={municipio} required={requiredValidation} />
        </section>
        <section>
          <label>Provicia</label>
          <select onChange={(e) => setId_provincias(e.target.value)}>
            <option>Seleccione Provincia</option>
            {provincia.map((v, i) => (
              <option key={i} value={v.id}>
                {v.provincia}
              </option>
            ))}
          </select>
          </section>
      <article>
        <button onClick={(e) => updatepost(e)}>
          {Object.keys(municipioactual).length > 0 ? "Editar" : "Agregar"}
        </button>
      </article>
    </form>
  );
};

export default MunicipiosForm;

