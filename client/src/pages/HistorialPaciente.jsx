import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getHistorial } from "../services/pacientes";
import Grafic from "../components/app/historialpaciente/grafic";
import Datos from "../components/app/historialpaciente/datos";

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  
`;

const Sidebar = styled.div`
  width: 20vw;
  background-color: #78a0dc;
  padding: 20px;
  
`;

const Content = styled.div`
  flex: 1;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const PatientInfoContainer = styled.div`
  height: 80%;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PatientName = styled.h2`
  color: #333333;
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 30px;
`;

const PatientData = styled.p`
  color: #666666;
  margin-bottom: 10px;
  &>strong{
    font-size: 17px;
    font-weight: 800;
  }
`;

const DashboardTitle = styled.h1`
  color: #fff;
  font-size: 34px;
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #fff;
`;

const HistorialPaciente = () => {
    const { id } = useParams();
    const [paciente, setPaciente] = useState(null);

    const getApiData = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/historial/${id}`);
            if (!response.ok) {
                throw new Error("Error en la respuesta de la API");
            }
            const data = await response.json();
            console.log("Datos obtenidos:", data);
            setPaciente(...data);
        } catch (error) {
            console.error("Error al obtener los datos de la API:", error);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    if (!paciente) {
        return <div>Cargando historial del paciente...</div>;
    }

    return (
        <DashboardContainer>
            <Sidebar>
                <DashboardTitle>Paciente</DashboardTitle>
                <PatientInfoContainer>
                    <PatientName>{paciente.nombre}</PatientName>
                    <PatientData><strong>Primer Apellido:</strong> {paciente.ap_paterno}</PatientData>
                    <PatientData><strong>Segundo Apellido:</strong> {paciente.ap_materno}</PatientData>
                    <PatientData><strong>Fecha nacimiento: </strong>{paciente.fecha_nacimiento}</PatientData>
                    <PatientData><strong>Hora nacimiento: </strong>{paciente.hora_nacimiento}</PatientData>
                    <PatientData><strong>Ciudad: </strong>{paciente.ciudad}</PatientData>
                    <PatientData><strong>Género:</strong> {paciente.sexo}</PatientData>
                    <PatientData><strong>Dirección: </strong>{paciente.direccion}</PatientData>
                    <PatientData><strong>Madre: </strong>{paciente.madre}</PatientData>
                    <PatientData><strong>Telefono norma: </strong>{paciente.telefono1}</PatientData>
                    <PatientData><strong>Telefono emergencia: </strong>{paciente.telefono2}</PatientData>

                </PatientInfoContainer>
            </Sidebar>
            <Content>
                <PatientName htmlFor="">Datos generales paciente</PatientName>
                <Grafic />
                <Datos />
            </Content>
        </DashboardContainer>
    );
};

export default HistorialPaciente;
