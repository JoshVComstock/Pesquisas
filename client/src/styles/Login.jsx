import styled from "styled-components";
import { Colors } from "./colors";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
export const Divform = styled.div`
  width: 50%;
  height: 100%;
  background:${Colors.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  &>form{
    width: 470px;
    height: 600px;
    background: ${Colors.bg};
    display: flex;
    flex-direction: column;
    padding: 60px;
    gap: 20px;
    border-radius: 20px;
    box-shadow: 0px 5px 5px  ${Colors.gray300};
    &>img{
      width: 64px;
      height: 64px;
    }
    &>p{
      color:${Colors.primary};
    }
    &>h1{
      color: ${Colors.primary400};
    }
    &>label{
      color: ${Colors.primary};
    }
    &>input{
      height: 40px;
      width: 100%;
      outline: none;
      padding: 5px;
      background:transparent;
      border-bottom: 1px solid ${Colors.gray300};
      color: ${Colors.primary};
      font-size: 18px;
    }
    &>div{
      height: 50px;
      width: 100%;
    }
    &>div{
      display: flex;
      align-items: center;
      justify-content: center;
      &>button{
        background: ${Colors.primary400};
        width: 150px;
        height: 40px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: end;
        color: ${Colors.white};
        cursor: pointer;
        transition: 0.5s;
        &:hover{
          opacity: 0.8;
        }
        &>img{
          width: 30px;
          height: 20px;
          margin: 5px 10px;
filter: invert(85%) sepia(9%) saturate(283%) hue-rotate(162deg) brightness(106%) contrast(104%);
        }
      }
    }
  }
`;
export const Divimg = styled.div`
width: 50%;
height: 100%;
  background: ${Colors.bg};
  display: flex;
    justify-content: end;
    position: relative;
  &>img{
    position: absolute;
    width: 600px;
    height: 600px;
    bottom: 0;
  left: 0; z-index: 1;
  }
  &>div{
    width: 80%;
    height: 100%;
    background:${Colors.primary400};
    opacity: 0.5;
  }
`;
