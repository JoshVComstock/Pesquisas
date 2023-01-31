import React from "react";
import styled from "styled-components";
import { useState,useEffect } from "react"

const Registro_provinciaForm = ({ mostrarregistroprovincias }) => {
    // defino variables
    const [hora, setHora] = useState([]);
    const [fecha, setFecha] = useState([]);

    const [id_provincias, setId_provincias] = useState("");
    const [provincias , setProvincias] = useState([]);

    const [id_municipios , setId_municipios] = useState("");
    const [municipios , setMunicipios] = useState([]);

    const [id_centros, setId_centros] = useState("");
    const [centros, setCentros] = useState([]);

    const [cantidad_recibida, setCantidad_recibida] = useState("");
    const [cantidad_entregada, setCantidad_entregada] = useState("");
    const [cod_tarjeta, setCod_tarjeta] = useState("");
    const [entregado_por, setEntregado_por] = useState("");
    const [telefono, setTelefono] = useState("");
    const [recibido_por, setRecibido_por] = useState("");
  
  
    const enviar = async (e) => {
        e.preventDefault();
        
        const response = await fetch("http://127.0.0.1:8000/api/registro_provincias", {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify({
            hora: hora,
            fecha: fecha,
            id_provincias: id_provincias,
            id_municipios : id_municipios ,
            id_centros: id_centros,
            cantidad_recibida: cantidad_recibida,
            cantidad_entregada	: cantidad_entregada	,
            cod_tarjeta: cod_tarjeta,
            entregado_por: entregado_por,
            telefono: telefono,
            recibido_por: recibido_por,
            
          }),
          
        });
        const respuesta = await response?.json();

        // solo limpia los campos
    if ((respuesta.ok)) {
      setHora(" ");
      setFecha(" ");
      setId_provincias(" ");
      setId_municipios(" ");
      setId_centros(" ");
      setCantidad_recibida(" ");
      setCantidad_entregada(" ");
      setCod_tarjeta(" ");
      setEntregado_por(" ");
      setTelefono(" ");
      setRecibido_por(" ");
      mostrarregistroprovincias();
    }
};
console.log(id_provincias+" id_provincias",id_municipios+ " idmunicipios ",id_centros+"centros");
async function Provincias() {
    const response = await fetch("http://127.0.0.1:8000/api/provincias", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setProvincias(respuesta);
    setId_provincias(provincias);
  }

  async function MostrarMunicipios() {
    const response = await fetch("http://127.0.0.1:8000/api/municipios", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setMunicipios(respuesta);
    setId_municipios=municipios;
  }

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
    setId_centros=centros;
  }


  useEffect(() => {
    MostrarCentros();
    MostrarMunicipios();
    Provincias();

  }, []);

    return (
        <div>
          <form>
            <div>
                
              <div>
                <label htmlFor="">hora </label>
                <Input
                  type="time" required 
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">fecha </label>
                <Input
                  type="date" 
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                />
              </div>
            {/* ----------- */}
            <div>
            <label>Centro de Salud:</label>
            <select value={centros} onChange={(e) => setId_centros(e.target.value)} >
              {centros.map((v, i) => (
                <option key={i} value={v.id}  >
                  {v.nombre}
                </option>
              ))}
            </select>
          </div>

            {/* ----------- */}
              {/* ----------- */}
              <div>
            <label> Municipio :</label>
            <select value={municipios} onChange={(e) => setId_municipios(e.target.value)} >
              {municipios.map((v, i) => (
                <option key={i} value={v.id}  >
                  {v.municipio}
                </option>
              ))}
            </select>
          </div>

            {/* ----------- */}
              {/* ----------- */}
              <div>
            <label> Provincias :</label>
            <select value={provincias} onChange={(e) => setId_provincias(e.target.value)} >
              {provincias.map((v, i) => (
                <option key={i} value={v.id}  >
                  {v.provincia}
                </option>
              ))}
            </select>
          </div>

            {/* ----------- */}
              <div>
                <label htmlFor="">cantidad_recibida</label>
                <Input
                  type="number" 
                  value={cantidad_recibida}
                  onChange={(e) => setCantidad_recibida(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">cantidad_entregada,</label>
                <Input
                  type="number"
                  value={cantidad_entregada}
                  onChange={(e) => setCantidad_entregada(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">cod_tarjeta,</label>
                <Input
                  type="number"
                  value={cod_tarjeta}
                  onChange={(e) => setCod_tarjeta(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">entregado_por</label>
                <Input
                  type="text"
                  value={entregado_por}
                  onChange={(e) => setEntregado_por(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">telefono</label>
                <Input
                  type="number"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">recibido_por</label>
                <Input
                  type="text"
                  value={recibido_por}
                  onChange={(e) => setRecibido_por(e.target.value)}
                />
              </div>
            </div>
            <Botonagregar onClick={enviar}>Agregar</Botonagregar>
          </form>
        </div>
      );
   
  };
    


export default Registro_provinciaForm;

const Input = styled.input`
  margin: 5px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  height: 30px;
  outline: none;
`;
const Botonagregar = styled.button`
  margin-top: 40px;
  width: 100%;
  color: white;
  background: #2a9d8f;
  border: none;
  height: 40px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
