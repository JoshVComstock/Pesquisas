import styled from "styled-components";

export const Container = styled.div`
  width: calc(100%-200px);
  display: flex;
  flex-direction: column;
`;
export const Titulo = styled.label`
  font-size: 25px;
  margin: 20px;
  display: block;
  cursor: default;
  margin-left: 50px;
`;
export const Divbotones = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Botonespdf = styled.button`
  border-radius: 0px 5px 5px 0px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  &:hover {
    color: #fff;
    background: #0066ff;
  }
  &:hover Img {
    filter: invert(100%) sepia(31%) saturate(2%) hue-rotate(198deg)
      brightness(107%) contrast(101%);
  }
`;
export const Botonespdf1 = styled.button`
  padding: 0px 15px 0px 15px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover Img {
    filter: invert(100%) sepia(31%) saturate(2%) hue-rotate(198deg)
      brightness(107%) contrast(101%);
  }
  background: rgba(0, 0, 0, 0.1);
  &:hover {
    color: #fff;
    background: #0066ff;
  }
`;
export const Botonespdf2 = styled.button`
  border-radius: 5px 0px 0px 5px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  margin-left: 50px;
  &:hover {
    color: #fff;
    background: #0066ff;
  }
  &:hover Img {
    filter: invert(100%) sepia(31%) saturate(2%) hue-rotate(198deg)
      brightness(107%) contrast(101%);
  }
`;
export const Img = styled.img`
  width: 20px;
  height: 20px;
`;
export const Divsearchpadre = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const Divsearch = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  align-items: center;
  border-radius: 60px;
  padding: 10px 20px;
  height: 40px;
  margin: 10px;
`;
export const Search = styled.input`
  background: transparent;
  flex: 1;
  outline: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 16px;
  color: #000;
  &:focus {
    border-bottom: 1px solid #0066ff;
  }
`;
export const Botonsearch = styled.button`
  border: 0;
  border-radius: 50%;
  width: 30px;
  height: 29px;
  cursor: pointer;
  &:hover {
    background: #0066ff;
  }
  &:hover Img {
    filter: invert(100%) sepia(31%) saturate(2%) hue-rotate(198deg)
      brightness(107%) contrast(101%);
  }
`;
export const Botonacciones = styled.div`
  display: flex;
  margin: 5px;
`;
export const Iconsacciones = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
  background: transparent;
  filter: invert(74%) sepia(20%) saturate(1367%) hue-rotate(148deg)
    brightness(94%) contrast(89%);
`;
export const Iconsacciones1 = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
  background: transparent;
  filter: invert(57%) sepia(96%) saturate(7239%) hue-rotate(342deg)
    brightness(102%) contrast(80%);
`;
export const Botonesacciones = styled.button`
  background: transparent;
`;
export const Divtabla = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 10px 50px;
`;
export const Thead = styled.thead`
  background: #22577a;
  margin-bottom: 15px;
  color: white;
  height: 40px;
`;
export const Tbody = styled.tbody`
  color: #000;
`;
export const Th = styled.th`
  width: 10%;
`;
export const Trdatos = styled.td`
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
export const Tabla = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  overflow-y: scroll;
`;