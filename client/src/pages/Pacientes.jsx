import { UseFech } from "../hooks/useFech";
import { getPacientes } from "../services/pacientes";
import styled from "styled-components";
import { Link } from "react-router-dom";
import a from "../img/holapa.jpg";

const Pacientes = () => {
  const { data: pacientes } = UseFech(getPacientes);

  const verHistorial = (id) => {
    // Lógica para ver el historial del paciente con el ID proporcionado
    console.log(`Ver historial del paciente con ID: ${id}`);
  };

  return (
    <DivTarjetas>
      {pacientes.map((v, i) => (
        <PacienteCard key={i}>
          <PacienteHeader>
            <img src={a} alt="" />
            <PacienteName>{v.nombre}</PacienteName>
            <Link to={`/pacientes/${v.id}`}>
              <Button onClick={() => verHistorial(v.id)}>Ver Historial</Button>
            </Link>
          </PacienteHeader>
          <PacienteInfo>Primer Apellido: {v.ap_paterno}</PacienteInfo>
          <PacienteInfo>Segundo Apellido: {v.ap_materno}</PacienteInfo>
          <PacienteInfo>Sexo: {v.sexo}</PacienteInfo>
          <PacienteInfo>Madre: {v.madre}</PacienteInfo>
        </PacienteCard>
      ))}
    </DivTarjetas>
  );
};

export default Pacientes;

const DivTarjetas = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1.5rem;
  overflow-y: auto;
  max-height: 800px;
`;

const PacienteCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const PacienteHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  &>img{
    width: 50px;
    height: 50px;
  }
`;

const PacienteName = styled.h4`
  margin: 0;
  flex-grow: 1;
  font-size: 1.2rem;
  color: #333;
`;

const PacienteInfo = styled.p`
  margin: 0.5rem 0;
  color: #777;
`;

const Button = styled.button`
  background-color: #34a1eb;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
`;