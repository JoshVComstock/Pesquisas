import React from "react";
import styled from "styled-components";

const CentroForm = () => {
  return (
    <div>
      <div>
        <div>
          <h3>Ingrese un nuevo Centro</h3>
        </div>
        <form action="submit">
          <div>
            <label>ID:</label>
            <input readOnly type="text" required />
          </div>
          <div>
            <label>Nombre:</label>
            <input  name="Nombre" type="text" required />
          </div>
          <div>
            <label>Red de Salud:</label>
            <select name="select">
              <option value="Red Norte">Red Norte</option>
              <option value="Red Sur">Red Sur</option>
              <option value="Red Este">Red Este</option>
            </select>
          </div>
          <div>
            <label>Teléfono:</label>
            <input name="Telefono" type="number" required />
          </div>
          <div>
            <label>Ciudad:</label>
            <select name="select">
              <option value="Cochabamba">Cochabamba</option>
              <option value="Santa Cruz">Santa Cruz</option>
              <option value="La Paz">La Paz</option>
              <option value="Chuquisaca">Chuquisaca</option>
              <option value="Pando">Pando</option>
              <option value="Beni">Beni</option>
              <option value="Potosi">Potosi</option>
              <option value="Oruro">Oruro</option>
              <option value="Tarija">Tarija</option>
            </select>
          </div>
          <div>
            <label>Área:</label>
            <select name="select">
              <option value="Pediatra">Pediatría</option>
              <option value="Laboratorio">Laboratorio</option>
              <option value="Quirofano">Quirofano</option>
            </select>
          </div>
          <div>
            <label>Seguimiento de Casos:</label>
            <fieldset>
              <label>
                <input type="radio" name="Seguimiento" value="SI"/> Si
              </label>
              <label>
                <input type="radio" name="Seguimiento" value="NO"/> No
              </label>
            </fieldset>
          </div>
          <div>
            <label>Contacto:</label>
            <input name="Contacto" type="number" required />
          </div>
        </form>
        <div>
          <button>Registrar</button>
          <button>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default CentroForm;

const Input = styled.button`
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  background-color: yellow;
`;
