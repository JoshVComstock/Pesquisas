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
   Cartilla 
      </h2>
      <Card>
        <Divnameco>
          <div>
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
          </div>
          <Divcartilla>
            <Labelname htmlFor="">CODIGO CARTILLA</Labelname>
            <Inputname type="number"  />
          </Divcartilla>
        </Divnameco>
        <Divname>
          <Labelname>
            <strong>FECHA DE NACIMIENTO:</strong>
          </Labelname>
          <Divdatetime>◘
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
            <P>Gramos</P>
          </Pesnacerinput>
        </Divname>
        <Divname>
          <Labeldate htmlFor="">
            <strong>TRANSFUNSION:</strong>
          </Labeldate>
          <Divinputdate>
            <Labeldate htmlFor="">SI</Labeldate>
            <Inputsexo type="radio" />
            <Labeldate htmlFor="">NO</Labeldate>
            <Inputsexo type="radio" />
          </Divinputdate>
          <Labeldate htmlFor="">
            <strong>FECHA</strong>
          </Labeldate>
          <Inputname type="date" />
          <Labeldate htmlFor="">
            <strong>ANTIBIOTICOS</strong>
          </Labeldate>
          <Inputname type="text" />
        </Divname>
        <Divname>
          <Labeldate htmlFor="">
            <strong>CENTRO DE SALUD</strong>
          </Labeldate>
          <Select name="" id="">
            <option value="">Seleccione el centro</option>
          </Select>
        </Divname>
        <Divmadre>
          <Labeldate DE SALUD htmlFor="">
            <strong>DATOS DE LA MADRE</strong>
          </Labeldate>
          <Divdatosmadre>
            <Labeldate DE SALUD htmlFor="">
              NOMBRE
            </Labeldate>
            <Inputname type="text" />
            <Labeldate htmlFor="">APELLIDO</Labeldate>
            <Inputname type="text" />
            <Labeldate htmlFor="">CARNET</Labeldate>
            <Inputname type="number" />
            <Labeldate htmlFor="">TELEFONO</Labeldate>
            <Inputname type="number" />
          </Divdatosmadre>
          <Divdirectionmadre>
            <Labeldate htmlFor="">DIRECCION</Labeldate>
            <Inputname type="text" />
            <Labeldate htmlFor="">DETALLE DIRECCION</Labeldate>
            <Inputname type="text" />
            <Labeldate htmlFor="">CIUDAD</Labeldate>
            <Select name="" id="">
              <option value="">Seleccione Ciudad</option>
            </Select>
            <Labeldate htmlFor="">TELEFONO</Labeldate>
            <Inputname type="number" />
          </Divdirectionmadre>
          <Divenfermedad>
            <div>
              <Labeldate htmlFor="">TRATAMIENTO HIPERTIROIDISMO</Labeldate>
              <Inputname type="text" />
              <Labeldate htmlFor="">TRATAMIENTO HIPOTIROIDISMO</Labeldate>
              <Inputname type="text" />
            </div>
            <div>
              <Labeldate htmlFor="">ENFERMEDAD:</Labeldate>
              <Inputname type="text" />
              <Boton type="button">Agregar</Boton>
            </div>
          </Divenfermedad>
        </Divmadre>
      </Card>
    </Container>
  );
};

export default Cartilla;

const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin:0 auto;
  
`;
const Card = styled.div`
  margin-top: 30px;
  height: 500px;
  background: #fff;
`;
const Divname = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Labelname = styled.label`
  margin: 10px;
  width: 15%;
  user-select: none;
  font-size:13px;
`;
const Inputname = styled.input`
  margin-top: 5px;
  margin-bottom: 5px;
  text-transform: uppercase;
  width: 70%;
  height: 30px;
  border-radius: 10px;

  border: 1px solid #0005;
  outline: none;
  padding: 10px;
  font-size:13px;
  &:focus {
    border: 1.5px solid #034078;
  }
`;
const Divnameco = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  & > div {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
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
  font-size:12px;
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
const P = styled.div`
  margin-left: 20px;
`;
const Divmadre = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
`;
const Divdatosmadre = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Divdirectionmadre = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Divenfermedad = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  & > div {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
`;
const Divcartilla = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;
const Select = styled.select`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 80%;
  height: 35px;
  border-radius: 15px;
  box-shadow: 0px 0.5px 0px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.3);
  outline: none;
  font-size:13px;
`;
const Boton=styled.button`
  background:#0e3392c9;
  border-radius:20px;
  height:30px;
  color:#fff;
`;
