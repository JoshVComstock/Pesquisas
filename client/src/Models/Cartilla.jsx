import React from "react";
import styled from "styled-components";

const Cartilla = () => {
  return (
    <Container>
      <Containerhijo>
        <label id="labelprimerapellido" htmlFor="">
          PRIMER APELLIDO
        </label>
        <input type="text" id="inputapellido" />

        <label htmlFor="" id="labelsegungoapellido">
          SEGUNDO APELLIDO
        </label>
        <input type="text" id="inputseundoapelldo" />

        <label htmlFor="" id="labelnombre">
          NOMBRE
        </label>
        <input type="text" id="inputnombre" />

        <label htmlFor="" id="labelfechanacimiento">
          FECHA NACIMIENTO
        </label>

        <label htmlFor="" id="labelhora">
          HORA
        </label>
        <input type="time" id="inputhora" />

        <label htmlFor="" id="labelfecha">
          FECHA
        </label>
        <input type="date" id="inputfecha" />

        <label htmlFor="" id="labelsexo">
          SEXO
        </label>

        <label htmlFor="" id="labelm">
          M
        </label>
        <input type="radio" name="sexo" id="inputm" />

        <label htmlFor="" id="labelf">
          F
        </label>
        <input type="radio" name="sexo" id="inputf" />

        <label htmlFor="" id="labelfechamuestra">
          FECHA DE TOMA DE MUESTRA
        </label>

        <label htmlFor="" id="labelhoramuestra">
          HORA
        </label>
        <input type="time" id="inputhoramuestra" />

        <label htmlFor="" id="labelfechamuestra">
          FECHA
        </label>
        <input type="date" id="inputfechamuestra" />

        <label htmlFor="" id="labelmuestra">
          MUESTRA
        </label>
        <input type="number" id="inputmuestra" />

        <label htmlFor="" id="labelnacimientotermino">
          NACIMIENTO A TERMINO
        </label>
        <input type="checkbox" name="" id="inputnacimientotermino" />

        <label htmlFor="" id="labeledadgestion">
          EDAD GESTACIONAL
        </label>

        <label htmlFor="" id="labelsemanas">
          SEMANAS
        </label>
        <input type="number" id="inputsemanas" />

        <label htmlFor="" id="labeldias">
          DIAS
        </label>
        <input type="number" id="inputdias" />

        <label htmlFor="" id="labelpesonacer">
          PESO AL NACER
        </label>
        <input type="number" id="inputpesonacer" />

        <label htmlFor="" id="labeltransfunsion">
          TRANSFUNSION
        </label>
        <input type="checkbox" name="" id="inputtransfuncion" />

        <label htmlFor="" id="labelfecha">
          FECHA
        </label>
        <input type="date" id="inpufecha" />

        <label htmlFor="" id="labelantibioticos">
          ANTIBIOTICOS
        </label>
        <input type="text" id="inputantiobioticos" />

        <label htmlFor="" id="labelredcentro">
          RED / CENTRO DE SALUD
        </label>
        <input type="text" id="inputredcentro" />
      </Containerhijo>
    </Container>
  );
};

export default Cartilla;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Containerhijo = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(7,auto);
  grid-template-columns: repeat(20,1fr);
  grid-template-areas:
  "1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2"
  "3 3 3 3 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4"
  "5 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6"
  "7 7 7 7 8 8 9 9 9 10 10 11 11 11 12 12 13 14 15 16"
  "17 17 17 17 18 18 19 19 19 20 20 21 21 21 22 22 23 23 23 23"
  ""
  "" ;
  input{
    border: 1px solid black;
  }

  #labelprimerapellido{
   grid-area: 1;
  }
  #inputprimerapellido{
   grid-area: 2;
  }
  #labelsegundoapellido{
   grid-area: 3;
  }
  #inputsegundoapellido{
   grid-area: 4;
  }
  #labelnombre{
   grid-area: 5;
  }
  #inputnombre{
   grid-area: 6;
  }
  #labelfechanacimiento{
   grid-area: 7;
  }
  #labelhora{
   grid-area: 8;
  }
  #inputhora{
   grid-area: 9;
  }
  #labelfecha{
   grid-area: 10;
  }
  #inputfecha{
   grid-area: 11;
  }
  #labelsexo{
   grid-area: 12;
  }
  #labelm{
   grid-area: 13;
  }
  #inputm{
   grid-area: 14;
  }
  #labelf{
   grid-area: 15;
  }
  #inputf{
   grid-area: 16;
  }
  #labelm{
   grid-area: 13;
  }
  #inputm{
   grid-area: 14;
  }
  #labelfechamuestra{
    grid-area: 15;
  }
`;

