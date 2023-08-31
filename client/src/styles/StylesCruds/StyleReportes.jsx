import styled from "styled-components";
import { Colores, StyleComun } from "./DataStyle";

export const Report = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  & form {
    color: ${Colores.negro};
    background-color: ${Colores.blanco};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 1em 3em;
    position: relative;
    box-shadow: 2px 1px 10px #0005;
    width: 30em;
    & article {
      ${StyleComun}
      flex-wrap:wrap;
      gap: 1em;
      padding: 1em;
      flex-direction: column;
      & label {
        width: 300px;
        ${StyleComun}
        gap:.5em;
        justify-content:flex-start;
      }
    }
    & h1 {
      width: 100%;
      height: 2.5em;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      font-size: 0.8em;
      background-color: ${Colores.buttons};
      color: ${Colores.blanco};
    }
    & button {
      margin: 1em auto;
      padding: 0.5em 2em;
      background-color: ${Colores.buttons};
      color: ${Colores.blanco};
      border-radius: 2em;
      &:hover {
        background-color: ${Colores.primary};
      }
    }
  }
  gap: 1em;
  & div {
    flex-grow: 1;
    & p {
      & strong {
        color: ${Colores.buttons};
        font-weight: bold;
      }
    }
    ${StyleComun}
    & iframe {
      width: 100%;
      height: 35vh;
      border: none;
      background-color: #4615a2d1;
    }
  }
`;
