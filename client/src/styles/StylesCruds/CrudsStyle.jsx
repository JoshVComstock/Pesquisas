import styled from "styled-components";
import { Colores, StyleComun } from "./DataStyle";
import { Link } from "react-router-dom";

// -------------------- para cars-------------------------
export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(236, 237, 241);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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
    align-items: flex-start;
    & > section {
      width: 300px;
    }
    & > div {
      width: 100%;
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
  gap: 0.2em;
  & p {
    padding: 1.5em 0 0 2.5em;
    font-size: 0.7em;
    color: #0009;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: none;
    border-bottom: solid 0.5px ${Colores.buttons};
    width: 70%;
    &:first-child {
      padding: 3em 0em 1em 2.5em;
    }
  }
  &img {
    width: 33px;
  }
  height: 88vh;
  overflow-y: scroll;
  & > section {
    background: rgb(245, 245, 243);
    cursor: pointer;
    text-decoration: none;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 1em 0;
    & div {
      background: rgb(245, 245, 243);
      cursor: pointer;
      text-decoration: none;
      color: #000000;
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 90%;
      font-size: 0.95em;
      margin-left: 10%;
      gap:.5em;
      & img {
        width: 22px;
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
      background-color: #c1c1c11f;
      padding: 10px;
      margin-top: 10px;
      border: solid 1px #0002;
    }
  }
`;
export const Linkes = styled(Link)`
  background: transparent;
  cursor: pointer;
  text-decoration: none;
  color: #0d145b;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  margin: 0.5em 0;
  font-size: 0.95em;
  margin-left: 10%;
  & > img {
    width: 22px;
  }
`;
