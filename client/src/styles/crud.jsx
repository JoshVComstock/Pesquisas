import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:row;
`;
export const Sectionpa = styled.section`
  width: 95%;
  height: 95%;
`;

export const Titulo = styled.label`
  color: #000000;
  margin: 0 20px;
  font-size: 1.2em;
  &::first-letter {
    font-size: 1.5em;
  }
`;
export const Divreport = styled.div`
  width: 100%;
  height: 12em;
  display: flex;
  flex-wrap: nowrap;
  gap: 2em;
  & div {
    color:#fff;
    /* &:nth-child(2n) {
  background-color: #fff;
  color:#000;
}

  &:nth-child(2n+1) {
  background-color: #30A9DE; } */
    width: calc(100% / 4);
    height: 80%;
    display: flex;
    flex-direction: row;
    transition: all 0.2s ease-in-out;
    border: solid 1px #0002;
    justify-content: space-around;
    padding: 1em;
    position: relative;
    z-index: 1;
    color:#000;
    border-radius: 5px;
    background-color:#fff;
    &::before {
      content: "";
      bottom: -0.8em;
      position: absolute;
      border: solid 1px #0002;
      width: 90%;
      height: 0.69em;
      background-color: #fff;
      z-index: 1;
      border-radius: 0 0 5px 5px;
    }

    &:hover {
      &::before {
        display: none;
      }
      transform: scale(1.02);
      border: solid 1px #0000;
      box-shadow: 0 0 5px #0003;
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
        font-size: 1.5em;
        border: solid 1px #0002;
        &::first-letter {
          font-size: 1.6em;
        }
      }
    }
  }
`;
export const Divbotonesa = styled.div`
 
`;
export const Botonespdf = styled.button`
  padding: 0.8em 4.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(63, 0, 151);
  color: rgb(255, 255, 255);
  font-size: 1em;
  border-radius: 1em;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.524);
  cursor: pointer;
`;
export const Botonespdf1 = styled.button`
  padding: 0.8em 4.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(63, 0, 151);
  color: rgb(255, 255, 255);
  font-size: 1em;
  border-radius: 1em;
  box-shadow: 0px 2px 5px 1px #000;
  cursor: pointer;
`;
export const Botonespdf2 = styled.button`
  box-shadow: 0px 2px 5px 1px #000;
  cursor: pointer;
  padding: 0.8em 4.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(63, 0, 151);
  color: rgb(255, 255, 255);
  font-size: 1em;
  border-radius: 1em;
`;
export const Img = styled.img`
  filter: invert(100%) sepia(0%) saturate(5518%) hue-rotate(211deg)
    brightness(100%) contrast(102%);
  background-color: transparent;
`;
export const Divsearchpadre = styled.div``;
export const Divsearch = styled.div``;
export const Search = styled.input``;
export const Botonsearch = styled.button``;
export const Botonacciones = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 0.2em;
`;
export const Iconsacciones = styled.button`
  background: #1d7faa;
  width: 60px;
  height: 25px;
  cursor: pointer;
  border-radius: 0.3em;
  color: #fff;
`;
export const Iconsacciones1 = styled.button`
  background: rgb(185, 25, 52);
  width: 60px;
  height: 25px;
  cursor: pointer;
  border-radius: 0.3em;
  color: #fff;
`;
export const Botonesacciones = styled.button``;

export const Divtabla = styled.table`
  width: 95%;
  margin: 1em auto;
  border-collapse: collapse;
  text-align:center;
`;
export const Thead = styled.thead`
  color: #000;
  background-color: rgb(34, 152, 202);
`;
export const Divbotones = styled.div``;

export const Dippadretabla = styled.div`
  width: 100%;
  margin: 0 auto;
  background: rgb(255, 255, 255);
  overflow: hidden;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: solid 1px #0002;
  & section {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    & > button {
      width: 2.5em;
      height: 2.5em;
      margin: 0.5em 0 0 0;
      background-color: blue;
      color: #fff;
      border-radius: 5px;
      font-size: 15px;
      transition: all 2s ease-in-out;
      &:hover {
        transform: rotate(180deg);
      }
    }
    & h2 {
      font-size: 1em;
      padding: 0.5em 2em;
      letter-spacing: 1.5px;
      &::first-letter {
        color: blue;
        font-size: 1.2em;
      }
    }
  }
`;
export const Tbody = styled.tbody``;

export const Sectiontabla = styled.section`
  overflow-y: scroll;
  width: 95%;
  height: 100%;
  margin-bottom:0.5em;
`;
export const Th = styled.th`
  border: solid 0.5px #0002;
  padding: 0em;
  border-collapse: collapse;
  padding: 1em 0em;
  font-weight: 200;
  color: #fff;
  text-transform: uppercase;
`;
export const Trdatos = styled.td`
  border: solid 0.5px;
  border: solid 0.5px #00000044;
`;
export const Tabla = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  overflow-y: scroll;
`;
