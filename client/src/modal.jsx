import React from "react";
import styled from "styled-components";
import { useModalContext } from "./context/modalContext";
import { Colores, StyleComun } from "./styles/StylesCruds/DataStyle";
import { Colors } from "./styles/colors";
import cerrar from "../src/img/icons/times-solid.svg";
const Modal = () => {
  const { openModal, setOpenModal, titulo, contenido } = useModalContext();
  if (openModal)
    return (
      <DivModalContainer>
        <div>
          <section>
            <button onClick={() => setOpenModal(false)}>
              {" "}
              <img src={cerrar} alt="cerrar" />{" "}
            </button>
            <p>{titulo}</p>
          </section>
          <aside>{contenido}</aside>
        </div>
      </DivModalContainer>
    );
};

export default Modal;

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
  animation: inicioModal 1s ease-in-out;
  background-color: ${Colors.white};
  @keyframes inicioModal {
    0% {
      width: 0;
      height: 100vh;
      background-color: ${Colors.white};

    }
    100% {
      background-color: ${Colors.white};

      width: 100vw;
      border-radius: 0;
    }
  }
  & > div {
    width: 30rem;
    height: auto;
    padding: 2em;
    background-color: ${Colors.white};
    position: relative;
    & > section {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      border-bottom:solid 1px #0005;
      & > button {
        & img {
          width: 14px;
        }
      }
    }
  }
`;
