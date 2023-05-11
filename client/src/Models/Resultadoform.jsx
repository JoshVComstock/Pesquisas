import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { horaactual, Actualdate } from "../services/date";
import { UseFech } from "../hooks/useFech";
import { getLaboratorios } from "../services/Laboratorios";
import { getCartillas } from "../services/cartilla";
import { postResultados } from "../services/resultados";
const Resultadoform = () => {
  const { data: cartillass } = UseFech(getCartillas);
  const { data: laboratorio } = UseFech(getLaboratorios);
  const [id_cartillas, setId_cartillas] = useState();
  const [id_laboratorio, setId_laboratorio] = useState();
  const [fecha_ingreso, setFecha_ingreso] = useState("");
  const [fecha_resultado, setFecha_resultado] = useState("");
  const [fecha_entregado, setFecha_entregado] = useState(Actualdate);
  const [resultado, setResultado] = useState("");
  const [metodo, setMetodo] = useState("");
  const [valor_resultado, setValor_resultado] = useState("");
  const [valor_referencia, setValor_referencia] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const enviar = () => {
    postResultados(
      id_cartillas,
      id_laboratorio,
      fecha_ingreso,
      fecha_resultado,
      fecha_entregado,
      resultado,
      metodo,
      valor_resultado,
      valor_referencia,
      observaciones,
      () => {
        setFecha_ingreso("");
        setFecha_resultado("");
        setResultado("");
        setMetodo("");
        setValor_resultado("");
        setValor_referencia("");
        setObservaciones("");
        setPacicar({
          nombre: "",
          ap_paterno: "",
          madre: "",
          fecha_toma_muestra: "",
        });
        setBuscar("");
      }
    );
  };

  const [pacicar, setPacicar] = useState({
    nombre: "",
    ap_paterno: "",
    madre: "",
    fecha_toma_muestra: "",
  });
  const [buscar, setBuscar] = useState("");

  const handleSearch = () => {
    const result = cartillass.find(
      (paciente) => paciente.codigo_barras === parseInt(buscar)
    );
    setPacicar(result);
    setId_cartillas(result?.id);
  };

  const handleChange = (e) => {
    setBuscar(e.target.value);
  };
  console.log(id_cartillas);
  return (
    <Container>
      <h2>RESULTADO</h2>
      <Card>
        <Divnameco>
          {pacicar && (
            <div>
              <Divname>
                <Labelname htmlFor="">
                  <strong>NOMBRE PACIENTE: </strong>
                </Labelname>
                <Inputname type="text" value={pacicar.nombre} readonly />
              </Divname>
              <Divname>
                <Labelname htmlFor="">
                  <strong>PRIMER APELLIDO: </strong>
                </Labelname>
                <Inputname type="text" value={pacicar.ap_paterno} readonly />
              </Divname>
              <Divname>
                <Labelname htmlFor="">
                  <strong>MADRE: </strong>
                </Labelname>
                <Inputname type="text" value={pacicar.madre} readonly />
              </Divname>
              <Divname>
                <Labelname htmlFor="">
                  <strong>FECHA DE TOMA DE MUESTRA</strong>
                </Labelname>
                <Inputname
                  type="text"
                  value={pacicar.fecha_toma_muestra}
                  readonly
                />
              </Divname>
            </div>
          )}
          <Divcartilla>
            <Labelname htmlFor="">CODIGO CARTILLA</Labelname>
            <Inputname type="number" value={buscar} onChange={handleChange} />
            <input type="submit" value="Buscar" onClick={handleSearch} />
          </Divcartilla>
        </Divnameco>
        <Divname>
          <Labeldate htmlFor="">FECHA DE INGRESO</Labeldate>
          <Inputname
            type="date"
            value={fecha_ingreso}
            onChange={(e) => setFecha_ingreso(e.target.value)}
          />
          <Labeldate htmlFor="">FECHA RESULTADO</Labeldate>
          <Inputname
            type="date"
            value={fecha_resultado}
            onChange={(e) => setFecha_resultado(e.target.value)}
          />
          <Labeldate htmlFor="">FECHA ENTRAGADO</Labeldate>
          <Inputname type="date" value={Actualdate} />
        </Divname>
        <Divname>
          <Labeldate htmlFor="">LABORATORIO</Labeldate>
          <Select name="" onChange={(e) => setId_laboratorio(e.target.value)}>
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
            value={valor_resultado}
            onChange={(e) => setValor_resultado(e.target.value)}
          />
          <Labeldate htmlFor="">VALOR REFERENCIA</Labeldate>
          <Inputname
            type="text"
            value={valor_referencia}
            onChange={(e) => setValor_referencia(e.target.value)}
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
            <option value="">Selecione resultado</option>
            <option value="POSITIVO">POSITIVO</option>
            <option value="NEGATIVO">NEGATIVO</option>
            <option value="SOSPECHOSO">SOSPECHOSO</option>
          </Select>
        </Divname>
        <Divboton>
          <Boton onClick={enviar}>Enviar</Boton>
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
