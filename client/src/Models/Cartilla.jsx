import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { horaactual, Actualdate } from "../services/date";
const Cartilla = () => {
  const [sexo, setSexo] = useState("");
  const [fecha, setFecha] = useState(Actualdate);
  return (
    <Container>
      <h2>
        SERVICIO DEPARTAMENTAL DE SALUD - SEDES - SANTA CRUZ PROGRAMA
        DEPARTAMENTAL DE TAMIZAJE NEONATAL
      </h2>
      <Card>
        <Divname>
          <Labelname htmlFor="">
            <strong>PRIMER APELLIDO</strong>
          </Labelname>
          <Inputname type="text" />
        </Divname>
        <Divname>
          <Labelname htmlFor="">
            <strong>SEGUNDO APELLIDO</strong>
          </Labelname>
          <Inputname type="text" />
        </Divname>
        <Divname>
          <Labelname htmlFor="">
            <strong>NOMBRE</strong>
          </Labelname>
          <Inputname type="text" />
        </Divname>
        <Divname>
          <Labelname>
            <strong>FECHA DE NACIMIENTO:</strong>
          </Labelname>
          <Divdatetime>
            <Divinputdate>
              <Labeldate htmlFor="">HORA</Labeldate>
              <Inputname
                type="time"
                name=""
                onChange={(e) => setFecha(e.target.value)}
              />
            </Divinputdate>
            <Divinputdate>
              <Labeldate htmlFor="">FECHA</Labeldate>
              <Inputname type="date" />
            </Divinputdate>
            <Divinputdate>
              <Labeldate htmlFor="">SEXO</Labeldate>
              <Divsexo>
                <Divinputsex>
                  <Labeldate htmlFor="">M</Labeldate>
                  <Inputsexo
                    type="radio"
                    name="sexo"
                    value={"MASCULINO"}
                    onChange={(e) => setSexo(e.target.value)}
                  />
                </Divinputsex>
                <Divinputsex>
                  <Labeldate htmlFor="">F</Labeldate>
                  <Inputsexo
                    type="radio"
                    name="sexo"
                    value={"FEMENINO"}
                    onChange={(e) => setSexo(e.target.value)}
                  />
                </Divinputsex>
              </Divsexo>
            </Divinputdate>
          </Divdatetime>
        </Divname>
        <Divname>
          <Labelname htmlFor="">
            <strong>FECHA DE TOMA DE MUESTRA:</strong>
          </Labelname>
          <Divdatetime>
            <Divinputdate>
              <Labeldate htmlFor="">HORA</Labeldate>
              <Inputname
                type="time"
                name=""
                value={horaactual}
                onChange={(e) => setFecha(e.target.value)}
              />
            </Divinputdate>
            <Divinputdate>
              <Labeldate htmlFor="">FECHA</Labeldate>
              <Inputname type="date" value={Actualdate} />
            </Divinputdate>
            <Divinputdate>
              <Labeldate htmlFor="">MUESTRA</Labeldate>
              <Inputname type="number" />
            </Divinputdate>
          </Divdatetime>
        </Divname>
        <Divname>
          <Labeldate htmlFor="">
            <strong>NACIMIENTO A TERMINO:</strong>
          </Labeldate>
          <Divinputdate>
            <Labeldate htmlFor="">SI</Labeldate>
            <Inputsexo type="radio" name="nacitermino" />
            <Labeldate htmlFor="">NO</Labeldate>
            <Inputsexo type="radio" name="nacitermino" />
          </Divinputdate>
          <Labeldate htmlFor="">
            <strong>EDAD GESTIONAL:</strong>{" "}
          </Labeldate>
          <Edadges>
            <Labeldate htmlFor="">SEMANAS</Labeldate>
            <Inputname type="number" />
            <Labeldate htmlFor="">DIAS</Labeldate>
            <Inputname type="number" />
          </Edadges>
          <Labeldate htmlFor="">
            <strong>PESO AL NACER:</strong>
          </Labeldate>
          <Pesnacerinput>
            <Inputname type="number" />
            <P>g</P>
          </Pesnacerinput>
        </Divname>
        <Divname>
          <Labeldate htmlFor=""><strong>TRANSFUNSION:</strong></Labeldate>
          <Divinputdate>
            <Labeldate htmlFor="">SI</Labeldate>
            <Inputsexo type="radio" />
            <Labeldate htmlFor="">NO</Labeldate>
            <Inputsexo type="radio" />
          </Divinputdate>
          <Labeldate htmlFor=""><strong>FECHA</strong></Labeldate>
          <Inputname type="date" />
          <Labeldate htmlFor=""><strong>ANTIBIOTICOS</strong></Labeldate>
          <Inputname type="text" />
        </Divname>
      </Card>
    </Container>
  );
};

export default Cartilla;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Card = styled.div`
  padding-top: 10px;
  width: 1200px;
  height: 500px;
  background: #fff;
  border-radius: 7px;
  box-shadow: 5px 2px 5px 2px rgba(0, 0, 0, 0.2);
`;
const Divname = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  padding: 10px;

  align-items: center;
`;
const Labelname = styled.label`
  margin: 10px;
  width: 15%;
  user-select: none;
`;
const Inputname = styled.input`
  margin-top: 5px;
  margin-bottom: 5px;
  text-transform: uppercase;
  width: 80%;
  height: 30px;
  border-radius: 5px;
  box-shadow: 1px 2px 5px 2px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.3);
  outline: none;
  padding: 10px;
  
  &:focus {
    border: 1.5px solid #034078;
  }
`;
const Divdate = styled.div`
  display: flex;
`;
const Divdatetime = styled.div`
  display: flex;
`;
const Divinputdate = styled.div`
  display: flex;
  margin: 5px;
  justify-content: center;
  align-items: center;
`;
const Labeldate = styled.label`
  margin-right: 10px;
  margin-left: 10px;
  user-select: none;
`;
const Divsexo = styled.div`
  display: flex;
  margin: 5px;
  justify-content: center;
  align-items: center;
`;
const Divinputsex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Inputsexo = styled.input`
  width: 17px;
  height: 17px;
  margin-top: 5px;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  &:focus {
    border: 1.5px solid #034078;
  }
`;
const Edadges = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Pesnacerinput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;
const P=styled.div`
  margin-left: 20px;
`;