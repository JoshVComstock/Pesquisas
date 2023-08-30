import React from 'react';
import styled from 'styled-components';

const FolderContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-height: 500px;
  overflow-y: auto;
  padding: 0 40px 0px 40px;
`;

const Folder = styled.div`
  width: 200px;
  padding: 20px;
  background-color: #315c9c;
  border-radius: 8px;
  color: #fff;
  
  &:hover{
    background-color: #4b7ac0;
  }
`;

const FolderTitle = styled.h3`
  margin-bottom: 10px;
`;

const FolderContent = styled.div`
  font-size: 14px;
`;

const Datos = () => {
  // Ejemplo de datos de pacientes
  const pacientes = [
    {
      id: 1,
      nombre: 'Jose daniel',
      fecha: "15-06-2022",
      diagnostico: 'El tratamiento estuvo bien',
    },
    {
      id: 2,
      nombre: 'Jose daniel',
      fecha: "01-05-2023",
      diagnostico: 'Se recomendo pastillas',
    },
    {
      id: 3,
      nombre: 'Jose daniel',
      fecha: "03-06-2023",
      diagnostico: 'El tratamiento va a corde',
    },
    // Agrega más pacientes aquí
  ];

  return (
    <div>
      <Title>Archivos de Pacientes</Title>
      <FolderContainer>
        {pacientes.map((paciente) => (
          <Folder key={paciente.id}>
            <FolderTitle>{paciente.nombre}</FolderTitle>
            <FolderContent>
              <p>Edad: {paciente.fecha}</p>
              <p>Diagnóstico: {paciente.diagnostico}</p>
              {/* Agrega más información del paciente aquí */}
            </FolderContent>
          </Folder>
        ))}
      </FolderContainer>
    </div>
  );
};

export default Datos;
const Title=styled.h2`
  margin: 20px;
`;