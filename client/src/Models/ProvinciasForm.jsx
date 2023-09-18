import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import InputValidation from "../components/app/inputvalidation";
import TextInput from "../components/app/textinput";
import { postProvincia, updateProvincia } from "../services/provincias";
import { alertnotify } from "../components/app/alert";
import { getCiudades } from "../services/Ciudades";

const ProvinciasForm = ({
  getApi,
  provinciaactual,
  setProviciaactual,
  closeModal,
}) => {
  const [requiredValidation, setRequiredValidation] = useState(false);
  const [provincia, setProvincia] = useState("");
  const [id_ciudad, setId_ciudad] = useState("");
  const { data: ciudades } = UseFech(getCiudades);
  useEffect(() => {
    if (Object.keys(provinciaactual).length > 0) {
      setProvincia(provinciaactual.provincia);
    }
    return () => {
      setProviciaactual({});
    };
  }, [provinciaactual]);

  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(provinciaactual).length > 0) {
      updateProvincia(
        {
          id: provinciaactual.id,
          provincia: provincia,
          id_ciudades: id_ciudad,
        },
        () => {
          setProvincia("");
          setProviciaactual({});
          getApi();
          closeModal();
        }
      );
      alertnotify("Provincia" + " editada");
    } else {
      postProvincia(provincia, id_ciudad, () => {
        setProvincia("");
        getApi();
        closeModal();
      });
      alertnotify("Provincia" + " agregada");
    }
  };
  return (
    <form>
      <section>
        <label>Nombre</label>
        <TextInput
          type="text"
          placeholder="Ingrese una Provincia"
          value={provincia}
          onChange={setProvincia}
        />
        <InputValidation value={provincia} required={requiredValidation} />
      </section>
      <section>
        <label>Ciudad</label>
        <select onChange={(e) => setId_ciudad(e.target.value)}>
          <option>Seleccione ciudad</option>
          {ciudades.map((v, i) => (
            <option key={i} value={v.id}>
              {v.ciudad}
            </option>
          ))}
        </select>
      </section>
      <article>
        <button
          onClick={(e) => {
            updatepost(e);
          }}
        >
          {Object.keys(provinciaactual).length > 0 ? "Editar" : "Agregar"}
        </button>
      </article>
    </form>
  );
};

export default ProvinciasForm;
