import React from 'react'
import styled from "styled-components";
import { useState, useEffect } from "react"

const ControlFiltrosForm = ({ MostrarControlFiltros }) => {
  const [fecha, setFecha] = useState([]);
  const [numero_correlativo, setNumCorrelativo] = useState("");
  const [cod_tarjeta_inicial, setCodInicial] = useState("");
  const [cod_tarjeta_final, setCodFinal] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [id_centros, setId_Centros] = useState("");
  const [entregado_por, setEntregado_por] = useState("");
  const [recibido_por, setRecibido_por] = useState("");
  const [centros, setCentros] = useState([]);
  const [loading, setLoading] = useState(false);

  const enviar = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("http://127.0.0.1:8000/api/control_filtros", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        fecha: fecha,
        numero_correlativo: numero_correlativo,
        cod_tarjeta_inicial: cod_tarjeta_inicial,
        cod_tarjeta_final: cod_tarjeta_final,
        cantidad: cantidad,
        id_centros: id_centros,
        entregado_por: entregado_por,
        recibido_por: recibido_por,
      }),

    });
    const respuesta = await response?.json();
    if ((respuesta.ok)) {
      setFecha(" ");
      setNumCorrelativo(" ");
      setCodInicial(" ");
      setCodFinal(" ");
      setCantidad(" ");
      setId_Centros(" ");
      setEntregado_por(" ");
      setRecibido_por(" ");
      MostrarControlFiltros();
    }
  };

  async function MostrarCentros() {
    const response = await fetch("http://127.0.0.1:8000/api/centros", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setCentros(respuesta);
  }

  useEffect(() => {
    MostrarCentros();
  }, []);

  return (
    <Container>
        <div>
          <form  >
            <Divinput>
              <Divinputlabel>
                <label>Fecha:</label>
                <Input type="date" placeholder='Ingrese Fecha' value={fecha} onChange={(e) => setFecha(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>N. Correlativo:</label>
                <Input type="text" placeholder='Número Correlativo' value={numero_correlativo} onChange={(e) => setNumCorrelativo(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Cod Inicial:</label>
                <Input type="text" placeholder='Código de Tarjeta Inicial' value={cod_tarjeta_inicial} onChange={(e) => setCodInicial(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Cod. Final:</label>
                <Input type="text" placeholder='Código de Tarjeta Final' value={cod_tarjeta_final} onChange={(e) => setCodFinal(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Cantidad:</label>
                <Input type="number" placeholder='Ingrese una Cantidad' value={cantidad} onChange={(e) => setCantidad(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Centro de Salud:</label>
                <select value={id_centros} onChange={(e) => setId_Centros(e.target.value)} >
                  {centros.map((v, i) => (
                    <option key={i} value={v.id}  >
                      {v.nombre}
                    </option>
                  ))}
                </select>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Entregado por:</label>
                <Input type="text" placeholder='Entregado por' value={entregado_por} onChange={(e) => setEntregado_por(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Recibido por:</label>
                <Input type="text" placeholder='Recibido por' value={recibido_por} onChange={(e) => setRecibido_por(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divboton>
              <Botonagregar type='submit' onClick={enviar} disabled={loading}>Agregar</Botonagregar>
            </Divboton>
          </form>
        </div>
    </Container>
  )
}

export default ControlFiltrosForm

const Container=styled.div`
`;
const Divinputlabel=styled.div`
  display: flex;
  flex-direction: column;
`;
const Divinput=styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  align-items: center;
`;
const Input=styled.input`
  margin-top: 5px;
  margin-bottom: 5px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,.3);
  outline: none;
  &:focus{
    border: 1.5px solid #034078;
  }
`;
const Divboton=styled.div`
  display: flex;
  justify-content: center;
`;
const Botonagregar=styled.button`
 padding: 10px;
 cursor: pointer;
 background:#034078;
 color: #fff;
 border-radius: 7px;
 &:hover{
  background: #0077b6;
 }
`;