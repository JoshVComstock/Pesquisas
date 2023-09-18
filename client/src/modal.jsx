import React from "react";
import styled from "styled-components";
import { useModalContext } from "./context/modalContext";
import { Colors } from "./styles/colors";
import cerrar from "../src/img/icons/times-solid.svg";
const Modal = () => {
  const { openModal, setOpenModal,titulo, contenido } = useModalContext();
  if (openModal)
    return (
      <DivModalContainer>
        <div>
          <section>
            <button onClick={() => setOpenModal(false)}>
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
  background-color: #0005;
  @keyframes inicioModal {
    0% {
      width: 0;
      height: 100vh;
      background-color: #0005;
    }
    100% {
      background-color: #0005;

      width: 100vw;
      border-radius: 0;
    }
  }
  & > div {
    width: 40rem;
    height: auto;
    padding: 2em;
    background-color: ${Colors.white};
    position: relative;
    & > section {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      border-bottom: solid 1px #0005;
      & > button {
        & img {
          width: 14px;
        }
      }
      & p {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.7em;
        color: #0009;
        font-weight: bold;
        padding:1em 0;
      }
    }
    & aside {
      border-left:solid 15px ${Colors.primary};
      & form {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        align-items: center;
        flex-direction:row;
        & section {
          width: 50%;
          display: flex;
          flex-wrap: wrap;
          padding: 1em;
          flex-direction:column;
          /* background-color:blue; */
          & label {
           font-size:0.9em;
           padding: 1em 0;
          }
          & input {
            border: none;
            border-bottom: solid 1px #0005;
            outline:none;
          }
          & select{
            width: 100%;
            border: none;
            border-bottom: solid 1px #0005;
            outline:none;
            padding:0.4em;
            background-color:${Colors.primary};
            color:${Colors.white};
           & option{
            padding:1em;
            &:hover{
              background-color:${Colors.primary300} !important;
            }
           }
          }
        
        }
        & > article {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          align-items: end;
          & button {
            background: ${Colors.primary400};
            border: none;
            color: ${Colors.white};
            padding: 0.5em 2em;
            border-radius: 1em;
          }
        }
      
      }
    }
  }
`;
