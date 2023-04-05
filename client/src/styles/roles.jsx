import styled from "styled-components"
import { Link } from "react-router-dom";


export const Img = styled.img`
  width: 22px;
  height: 22px;
  margin: 0 10px;
  background: #fff;
  border-radius:50%;

`;

export const Linkes = styled(Link)`
  padding: 8px 10px 8px 15px;
  cursor: pointer;
  text-decoration: none;
  color: #000000;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  width: 80%;
  border-radius: 0 2em 2em 0;
  border-left: solid 0.2em blue;
  &:hover {
    background: #fff;
    color: rgb(0, 156, 255);
    border-radius: 0px -20px 10px 0px;
    border-left: solid 0.5em blue;
  
  }
  &:hover Img {
    filter: invert(100%) sepia(0%) saturate(5518%) hue-rotate(211deg)
      brightness(100%) contrast(102%);
  }
`;
