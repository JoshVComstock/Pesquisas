import styled from "styled-components";
import { Colores, StyleComun } from "./DataStyle";
import { Link } from "react-router-dom";

// -------------------- para cars-------------------------
export const Container = styled.div`
  width: 100%;
  height: 100%;
  ${StyleComun}
`;
//------------------- para Reportes --------------------------

//------------------- para Tablas ----------------------------

// ------------------- para el Topnav Dashboard-------------
export const Divheader = styled.div`
  width: 100%;
  height: 100%;
  ${StyleComun}
  flex-direction: column;
  background-color: rgb(245, 245, 243);
  & > aside {
    ${StyleComun}
    width:100%;
    align-items: flex-start;
    & > section {
      width: 300px;
    }
    & > div {
      width: 100%;
      background-color: ${Colores.gris};
    }
  }
  & > nav {
    width: 100%;
    height: 10vh;
    background-color: rgb(245, 245, 243);
    ${StyleComun}
    justify-content: space-between;
    flex-direction: row;
    box-shadow: 0px 2px 5px 0px #0000004e;
    padding: 0 3em;
    z-index: 5;
    & > section {
      ${StyleComun}
      gap:1em;
      & button {
        width: 35px;
        height: 35px;
        background-color: ${Colores.buttons};
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
        border: none;
        &:hover {
          background-color: ${Colores.primary};
        }
      }
      & > h1 {
        font-size: 1.2em;
        & > strong {
          color: ${Colores.buttons};
          font-weight: 600;
        }
      }
    }

    & > article {
      ${StyleComun}
      gap:1em;
      & img {
        width: 35px;
        height: 35px;
      }
      & select {
        outline: none;
        background-color: transparent;
      }
      & button {
        background-color: ${Colores.buttons};
        color: #fff;
        padding: 0.5em 2em;
        border-radius: 2em;
        &:hover {
          background-color: ${Colores.primary};
        }
      }
    }
  }
`;
// ------------------- para el nav Dashboard-------------

export const Master = styled.nav`
  ${StyleComun}
  flex-direction: column;

  & p {
    font-size: 0.7em;
    color: #0009;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: none;
    border-bottom: solid 0.5px ${Colores.buttons};
    width: 70%;
    padding: 2em 0em 1em 2.5em;
  }
  &img {
    width: 33px;
  }
  height: 88vh;
  box-shadow: 0 5px 10px #0005;
  overflow-y: scroll;
  & > section {
    background-color: ${Colores.buttons};
    cursor: pointer;
    text-decoration: none;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 1em 0;
    padding: 0.5em 0;
    & div {
      background: transparent;
      cursor: pointer;
      text-decoration: none;
      color: ${Colores.blanco};
      ${StyleComun}
      width: 90%;
      font-size: 0.95em;
      margin-left: 10%;
      gap: 0.5em;
      & img {
        width: 22px;
        filter: invert(1);
        &:nth-child(2) {
          width: 10px;
          height: 8px;
          margin: 0 20%;
          background: transparent;
          transition: all ease 2s;
        }
      }
    }
    & > aside {
      position: relative;
      top: 0;
      left: 0;
      padding: 0;
      margin-top: 10px;
      /* color: ${Colores.blanco};
      & img {
        filter: invert(1);
      } */
      background-color: #fff;
    }
  }
`;
export const Linkes = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${Colores.buttons};
  ${StyleComun}
  justify-content:flex-start;
  width: 90%;
  margin: 0.3em 0;
  font-size: 0.95em;
  margin-left: 10%;
  padding: 0.5em;
  gap: 1em;
  border-radius: 1em 0 0 1em;
  &:hover {
    transform: translateX(-5px);
    box-shadow: 0px 5px 10px #0008;
    background-color: ${Colores.buttons};
    color: ${Colores.blanco};
    & img {
      filter: invert(1);
    }
  }
  & > img {
    width: 22px;
  }
`;
