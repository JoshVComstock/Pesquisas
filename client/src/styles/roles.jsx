import styled from "styled-components"
import { Link } from "react-router-dom";


export const Img = styled.img`
  width: 22px;
  height: 22px;
  margin: 0 10px;
  background: transparent;
`;
export const Imga = styled.img`
  width: 10px;
  height: 8px;
  margin: 0 20%;
  background: transparent;
  transition:all ease 2s;
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
  margin:0.5em 0;
  font-size:0.95em;
  margin-left:10%;
 
`;
