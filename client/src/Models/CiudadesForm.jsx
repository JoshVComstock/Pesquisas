import { useState, useEffect } from "react";
import { postCiudad, updateCiudades } from "../services/Ciudades";
import InputValidation from "../components/app/inputvalidation";
import TextInput from "../components/app/textinput";
import "react-toastify/dist/ReactToastify.css"; // Importa los estilos CSS
import { alertnotify } from "../components/app/alert";
const CiudadesForm = ({
  getApi,
  ciudadactual,
  setCiudadactual,
  closeModal,
}) => {
  const [ciudad, setCiudad] = useState("");
  const [requiredValidation, setRequiredValidation] = useState(false);
  useEffect(() => {
    if (Object.keys(ciudadactual).length > 0) {
      setCiudad(ciudadactual.ciudad);
    }
    return () => {
      setCiudadactual({});
    };
  }, [ciudadactual]);

  const updatepost = (e) => {
    e.preventDefault();
    if (ciudad.trim() === "") {
      setRequiredValidation(true);
      return;
    }
    if (Object.keys(ciudadactual).length > 0) {
      updateCiudades(
        {
          id: ciudadactual.id,
          ciudad: ciudad,
        },
        () => {
          setCiudad("");
          closeModal();
          setCiudadactual({});
          getApi();
        }
      );
      alertnotify("Ciudad", " editado");
    } else {
      postCiudad(ciudad, () => {
        setCiudad("");
        getApi();
        closeModal();
      });
      alertnotify("Ciudad", " agregada");
    }
  };

  return (
    <form>
      <section>
        <label>Ciudad</label>
        <TextInput value={ciudad} onChange={setCiudad} />
        <InputValidation value={ciudad} required={requiredValidation} />
      </section>
      <article>
        <button onClick={(e) => updatepost(e)}>
          {Object.keys(ciudadactual).length > 0 ? "Editar" : "Agregar"}
        </button>
      </article >
    </form>
  );
};
export default CiudadesForm;
