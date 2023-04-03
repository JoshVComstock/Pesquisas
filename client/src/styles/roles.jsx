import styled from "styled-components"
import { Link } from "react-router-dom";


export const Img = styled.img`
  width: 22px;
  height: 22px;
  margin: 0 10px;
  filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(5deg) brightness(112%)
    contrast(30%);
`;

export const Linkes = styled(Link)`
  padding: 10px 10px 10px 30px;
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  border-bottom: solid 1px #383333b7;

  
  &:hover {
    background: blue;
    color: #ffffff;
    border-radius: 0px -20px 10px 0px;
  }
  &:hover Img {
    filter: invert(100%) sepia(0%) saturate(5518%) hue-rotate(211deg)
      brightness(100%) contrast(102%);
  }
`;
