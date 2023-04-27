
import React from 'react'
import styled from "styled-components";
import { useModalContext } from './context/modalContext';
const Modal = () => {
  const { openModal, setOpenModal, titulo, contenido } = useModalContext();
  if(openModal) return (
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
const Botoncerrar=styled.button`
  height: 35px;
  width: 35px;
  font-size: 15px;
  border: solid 1px #0002;
  border-radius: 20px;
  color:black;
  cursor: pointer;
  transition: 0.5s;
  &:hover{
    background: rgba(0,0,0,.1);
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
  z-index:5;
  
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
  background-color: #ffffffbf;
  animation: move 1s;
  transform: translateY(50px);
  margin-bottom: 100px;
`;

const PTitulo = styled.p`
  width: 100%;
  font-weight: 400;
  font-size: 20px;
  display:flex;
  justify-content: center;
  color: #fff;


`;
const DivCabecera = styled.div`
  width: 100%;
  padding: 10px 26px;
  display: flex ;
  justify-content: space-between;
  align-items: center;
  background: #034078;
background: linear-gradient(90deg, rgba(22,18,89,1) 0%, rgba(27,98,158,1) 49%, rgba(5,6,79,1) 100%);
  position:relative;

  &::before{
position:absolute;
content:"";
bottom:-15px;
left:50%;
width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right:12px solid transparent;
  border-top: 16px solid #034078;
}
`;
const DivBody = styled.div`
  padding: 26px;
`;