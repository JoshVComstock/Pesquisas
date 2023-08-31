import React from "react";
import styled from "styled-components";
import { useModalContext } from "./context/modalContext";
import { Colores, StyleComun } from "./styles/StylesCruds/DataStyle";
const Modal = () => {
  const { openModal, setOpenModal, titulo, contenido } = useModalContext();
  if (openModal)
    return (
      <DivModalContainer>
        <DivAtras onClick={() => setOpenModal(false)}></DivAtras>
        <DivChildContainer>
          <DivCabecera>
            <PTitulo>{titulo}</PTitulo>
            <Botoncerrar onClick={() => setOpenModal(false)}>X</Botoncerrar>
          </DivCabecera>
          <DivBody>{contenido}</DivBody>
        </DivChildContainer>
      </DivModalContainer>
    );
};

export default Modal;
const Botoncerrar = styled.button`
  background-color: transparent;
  color: #0005;
  font-weight: 900;
  &:hover {
    color: #000;
  }
`;
const DivModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

const DivAtras = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  animation-name: transitionBackground;
  @keyframes transitionBackground {
    0% {
      background-color: rgba(0, 0, 0, 0.1);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;

const DivChildContainer = styled.div`
  z-index: 1;
  border-radius: 10px;
  min-width: 400px;
  background-color: #fff;
  animation: move 1s;
  transform: translateY(50px);
  margin-bottom: 100px;
  
`;

const PTitulo = styled.p``;
const DivCabecera = styled.div`
  font-size: 1.2em;
  font-weight: 600;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1em;
  box-shadow: 0 5px 10px #0005;
  
`;
const DivBody = styled.div`
  ${StyleComun}
  justify-content:flex-start;
  flex-wrap: wrap;
  width: 40vw;
  padding: 1em;
  & form{
width:100%;
${StyleComun}
flex-wrap:wrap;
justify-content:flex-start;
gap:2em;
  & section {
    ${StyleComun}
    flex-wrap:wrap;
    gap:1em;
    & div{
      ${StyleComun}
      gap:.5em;
      width:45%;
      & select{
        padding:.5em 1em;
        border:solid 1px #0005;
        border-radius:5px;
        outline:none;
      }
    }
  }
  & label {
  margin:0 .5em;
  }
  & div {
    width: 100%;
    ${StyleComun}
    justify-content:flex-end;

    & button {
      ${StyleComun}
      background-color:${Colores.buttons};
      padding: 0.5em 2em;
      border-radius: 2em;
      color: ${Colores.blanco};
      cursor: pointer;
      &:hover{
        background-color:${Colores.primary};
      }
    }
  }
}
`;
