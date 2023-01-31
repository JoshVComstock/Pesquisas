import styled from "styled-components"
import { Link } from "react-router-dom";


export const Img = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 10px;
  filter: invert(99%) sepia(6%) saturate(2%) hue-rotate(92deg) brightness(112%)
    contrast(100%);
`;

export const Linkes = styled(Link)`
  padding: 10px 10px 10px 30px;
  cursor: pointer;
  text-decoration: none;
  color: #aeaeae;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
  &:hover {
    background: #fff;
    color: #0066ff;
    border-radius: 0px -20px 10px 0px;
  }
  &:hover Img {
    filter: invert(25%) sepia(42%) saturate(5518%) hue-rotate(211deg)
      brightness(100%) contrast(102%);
  }
`;
