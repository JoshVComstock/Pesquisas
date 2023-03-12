import React from "react";
import styled from "styled-components";

const Cartilla = () => {
  return (
    <Container>
      <Containerhijo>
        <div>
          <label htmlFor="">Primer apellido</label>
          <Inputnombre type="text" />
        </div>
        <div>
          <label htmlFor="">Segundo apellido</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Fecha de nacimiento</label>
          <input type="date" name="" id="" />
          <div>
            <label htmlFor="">Sexo</label>
            <label htmlFor="">M</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">F</label>
            <input type="checkbox" name="" id="" />
          </div>
        </div>
        <div>
          <label htmlFor="">Fecha toma de muestra</label>
          <input type="date" />
          <label htmlFor="">Muestra</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Nacimiento a termino</label>
          <label htmlFor="">SI</label>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">NO</label>
          <input type="checkbox" />
          <div>
            <label htmlFor="">Edad gestion</label>
            <label htmlFor="">Semanas</label>
            <input type="Number" name="" id="" />
            <label htmlFor="">Dias</label>
            <input type="number" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Peso al nacer</label>
            <input type="text" name="" id="" />
          </div>
        </div>
        <div>
          <label htmlFor="">Transfucion</label>
          <label htmlFor="">SI</label>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">NO</label>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Fecha</label>
          <input type="date" />
          <label htmlFor="">Antibioticos</label>
          <label htmlFor="">SI</label>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">NO</label>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">¿Cual?</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">RED/CENTRO DE SALUD</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Datos de la madre</label>
          <div>
            <label htmlFor="">Nombre</label>
            <input type="text" />
            <label htmlFor="">Apellidos</label>
            <input type="text" />
            <label htmlFor="">Telefono</label>
            <input type="number" />
          </div>
          <div>
            <label htmlFor="">Direccion</label>
            <input type="text" />
            <label htmlFor="">Ciudad</label>
            <input type="number" />
          </div>
          <div>
            <div>
              <label htmlFor="">Hipertiroidismo</label>
              <label htmlFor="">SI</label>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">NO</label>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Tratamiento</label>
              <input type="text" />
              <label htmlFor="">Otra enfermedad</label>
              <label htmlFor="">Si</label>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">NO</label>
              <input type="checkbox" name="" id="" />
            </div>
            <div>
              <label htmlFor="">Hipotiroidismo</label>
              <label htmlFor="">SI</label>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">NO</label>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Tratamiento</label>
              <input type="text" />
              <label htmlFor="">¿Cual?</label>
              <input type="text" />
            </div>
          </div>
        </div>
      </Containerhijo>
    </Container>
  );
};

export default Cartilla;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Containerhijo=styled.div`
  display: flex;
  flex-direction: column;
`;
const Inputnombre=styled.input`
  border-bottom: 1px solid black;
`;
