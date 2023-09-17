import styled from "styled-components";
import { Colores, StyleComun } from "./DataStyle";
import { Link } from "react-router-dom";
import { Colors } from "../colors";

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
background: ${Colors.gray};

  & > aside {
    ${StyleComun}
    width:100%;
    align-items: flex-start;
    & > section {
      width: 300px;
      z-index: 1;
    }
    & > div {
      width: 100%;
      background-color: ${Colores.gris};
    }
  }
  & > nav {
    width: 100%;
    height: 10vh;
  background: ${Colors.gray};
    ${StyleComun}
    justify-content: space-between;
    flex-direction: row;
    padding: 0 3em;
    z-index: 5;
    & > section {
      ${StyleComun}
      gap:1em;
      & button {
        width: 35px;
        height: 35px;
        background-color: ${Colors.primary400};
        border-radius: 50%;
        color: ${Colors.white};
        cursor: pointer;
        border: none;
       
        transition: 0.5s;
        &:hover {
          opacity: 0.8;
        }
      }
      & > h1 {
        font-size: 1.8em;
        & > strong {
          color: ${Colors.primary400};
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
        filter: invert(37%) sepia(22%) saturate(1355%) hue-rotate(158deg) brightness(99%) contrast(92%);
      }
      & p {
        font-size: 14px;
        outline: none;
        background-color: transparent;
        text-transform:uppercase;
      }
      & button {
        width: 100px;
        background: ${Colors.primary400};
        color: ${Colors.white};
        padding: 0.5em 1em;
        border-radius: 2em;
        transition: 0.5s;
        font-size: 15px;
        cursor: pointer;
         display: flex;
        justify-content: space-between;
        align-items: center;
        &>img{
          width: 20px;
          height: 20px;
          filter: invert(1) 
        }
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;
// ------------------- para el nav Dashboard-------------

export const Master = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 90vh;
  box-shadow: 0 5px 10px ${Colors.gray300};
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
  }
`;
export const Linkes = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${Colors.primary};
  ${StyleComun}
  justify-content:flex-start;
  width: 88%;
  margin: 0.3em 0;
  font-size: 0.95em;
  padding: 0.7rem;
  gap: 2em;
  border-left: 5px solid transparent;
  border-radius: 10px;

  &:hover {
    color: ${Colors.white};
    background: ${Colors.primary400};
    &:hover>img{
      filter: invert(95%) sepia(3%) saturate(3036%) hue-rotate(215deg) brightness(102%) contrast(109%);
    }
  }
  & > img {
    width: 22px;
    filter: invert(33%) sepia(42%) saturate(6094%) hue-rotate(202deg) brightness(98%) contrast(105%);
  }
`;
/*export const Linkes = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${Colors.primary};
  ${StyleComun}
  justify-content: flex-start;
  width: 88%;
  margin: 0.3em 0;
  font-size: 0.95em;
  font-weight: 300;
  padding: 0.7rem;
  gap: 2em;
  position: relative;

  transition: transform 0.3s ease-in-out; 

  &:hover {
    color: ${Colors.primary400};
    transform: translateY(-3px); 
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1); 
  }
  &:hover>img{
    filter: invert(37%) sepia(22%) saturate(1355%) hue-rotate(158deg) brightness(99%) contrast(92%);
  }

  & > img {
    width: 22px;
    filter: invert(9%) sepia(54%) saturate(3818%) hue-rotate(191deg) brightness(96%) contrast(99%);
    transition: 0.5s;
  }
`;*/