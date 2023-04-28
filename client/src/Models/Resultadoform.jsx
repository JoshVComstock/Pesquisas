import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { horaactual, Actualdate } from "../services/date";
import { UseFech } from "../hooks/useFech";
import { getLaboratorios } from "../services/Laboratorios";
const Resultadoform = () => {
  const { data: laboratorio } = UseFech(getLaboratorios);
  const [idcartilla, setIdcartilla] = useState();
  const [idlaboratorio, setIdlaboratorio] = useState();
  const [fechaingreso, setFechaingreso] = useState("");
  const [fecharesultado, setFecharesultado] = useState("");
  const [fechaentregado, setFechaentregado] = useState("");
  const [resultado, setResultado] = useState("");
  const [metodo, setMetodo] = useState("");
  const [valorresultado, setValorresultado] = useState("");
  const [valorreferencia, setValorreferencia] = useState("");
  const [observaciones, setObservaciones] = useState("");
  return (
    <Container>
      <h2>RESULTADO</h2>
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
            <Inputname type="number" />
          </Divcartilla>
        </Divnameco>
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
          </Divdatetime>
        </Divname>
        <Divname>
          <Labeldate htmlFor="">FECHA DE INGRESO</Labeldate>
          <Inputname
            type="date"
            value={fechaingreso}
            onChange={(e) => setFechaingreso(e.target.value)}
          />
          <Labeldate htmlFor="">FECHA RESULTADO</Labeldate>
          <Inputname
            type="date"
            value={fecharesultado}
            onChange={(e) => setFecharesultado(e.target.value)}
          />
          <Labeldate htmlFor="">FECHA ENTRAGADO</Labeldate>
          <Inputname
            type="date"
            value={fechaentregado}
            onChange={(e) => fechaentregado(e.target.value)}
          />
        </Divname>
        <Divname>
          <Labeldate htmlFor="">LABORATORIO</Labeldate>
          <Select name="" onChange={(e) => setIdlaboratorio(e.target.value)}>
            <option value="">Seleccionar Laboratorio</option>
            {laboratorio.map((v, i) => (
              <option key={i} value={v.id}>
                {v.nombre}
              </option>
            ))}
          </Select>
        </Divname>
        <Divname>
          <Labeldate htmlFor="">METODO</Labeldate>
          <Inputname
            type="text"
            value={metodo}
            onChange={(e) => setMetodo(e.target.value)}
          />
          <Labeldate htmlFor="">VALOR RESULTADO</Labeldate>
          <Inputname
            type="text"
            value={valorresultado}
            onChange={(e) => setValorresultado(e.target.value)}
          />
          <Labeldate htmlFor="">VALOR REFERENCIA</Labeldate>
          <Inputname
            type="text"
            value={valorreferencia}
            onChange={(e) => setValorreferencia(e.target.value)}
          />
        </Divname>
        <Divname>
          <Labeldate htmlFor="">OBSERVACIONES</Labeldate>
          <Tareatext
            type="text"
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
          />
          <Labeldate>RESULTADO</Labeldate>
          <Select onChange={(e) => setResultado(e.target.value)}>
            <option value="POSITIVO">POSITIVO</option>
            <option value="NEGATIVO">NEGATIVO</option>
            <option value="SOSPECHOSO">SOSPECHOSO</option>
          </Select>
        </Divname>
        <Divboton>
          <Boton>Enviar</Boton>
        </Divboton>
      </Card>
    </Container>
  );
};

export default Resultadoform;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Card = styled.div`
  margin-top: 30px;
  width: 80%;
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
  font-size: 13px;
`;
const Inputname = styled.input`
  margin-top: 5px;
  margin-bottom: 5px;
  text-transform: uppercase;
  width: 70%;
  height: 30px;
  border-radius: 15px;
  box-shadow: 0px 0.5px 0px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.3);
  outline: none;
  padding: 10px;
  font-size: 13px;
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
  font-size: 12px;
`;
const Tareatext = styled.textarea`
  margin-top: 5px;
  margin-bottom: 5px;
  text-transform: uppercase;
  width: 70%;
  height: 100px;
  border-radius: 15px;
  box-shadow: 0px 0.5px 0px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.3);
  outline: none;
  padding: 10px;
  font-size: 13px;
  &:focus {
    border: 1.5px solid #034078;
  }
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
  font-size: 13px;
`;
const Datalist = styled.datalist`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 80%;
  height: 35px;
  border-radius: 15px;
  box-shadow: 0px 0.5px 0px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.3);
  outline: none;
  font-size: 13px;
`;
const Boton = styled.button`
  margin: 10px;
  background: #0e3392c9;
  border-radius: 20px;
  height: 30px;
  width: 150px;
  color: #fff;
`;
const Divboton = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;
