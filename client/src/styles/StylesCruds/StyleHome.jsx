import styled from "styled-components";
import { Colores, StyleComun } from "./DataStyle";
import { Colors } from "../colors";

export const DivMayor = styled.div`
  ${StyleComun}
  flex-wrap:wrap;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  background-color: transparent;
  padding: 2em 0;
  background: ${Colors.gray};
`;
export const DivReport = styled.div`
  width: 100%;
  margin-bottom: 2em;
  ${StyleComun}
  flex-wrap: wrap;
  gap: 1.5em;
  & div {
    width: 250px;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1em;
    position: relative;
    z-index: 1;
    color: #000;
    border-radius: 5px;
    background-color: rgb(245, 245, 243);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
      &::before {
        background-color: ${Colores.primary};
      }
    }

    &::before {
      content: "";
      bottom: -0.8em;
      position: absolute;
      border: solid 1px #0002;
      width: 90%;
      height: 0.69em;
      background-color: rgb(245, 245, 243);
      z-index: 1;
      border-radius: 0 0 5px 5px;
    }

    &:nth-child(2n) {
      background-color: rgb(245, 245, 243);
      color: #000;
    }

    &:nth-child(2n + 1) {
      background-color: rgb(236, 237, 241);
    }

    & img {
      width: 50px;
      height: 50px;
    }

    & section {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 50%;

      & h3 {
        background-color: rgb(34, 152, 202);
        width: 100%;
        height: 50%;
        color: #fff;
        text-align: center;
        font-size: 1em;
        border: solid 1px #0002;
        &::first-letter {
          font-size: 1.6em;
        }
      }
    }
  }
`;
export const Grafia = styled.div`
  ${StyleComun}
  width: 100%;
  flex-direction: row;
  gap: 1em;
  flex-wrap: wrap;
  & section {
    display: flex;
    width: 320px;
    flex-direction: column;
    border: solid 1px #0002;
    background-color: rgb(245, 245, 243);
    padding-bottom: 1em;
    &:nth-child(2n) {
      width: 420px;
    }
    &:nth-child(3n) {
      width: 350px;
    }
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.01);
      box-shadow: 0 0 5px 2px #0002;
    }
    & article {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000000;
      border-bottom: solid 1px #0002;
      padding: 1em 0;
      & button {
        cursor: pointer;
        border: solid 1px #0002;
        margin: 0 1em;
        background-color: rgb(34, 152, 202);
        color: #fff;
      }
      & h1 {
        color: #000000;
        font-size: 0.9em;
        padding-left: 1em;
        &::first-letter {
          color: blue;
          text-transform: uppercase;
          font-size: 1.1em;
        }
      }
    }
  }
`;
