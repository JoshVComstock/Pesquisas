import React from "react";
import styled from "styled-components";
import Hospital from "../assets/iconsLogin.jpg"
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useNavContext } from "../context/navcontext";
import { useuserContext } from "../context/userContext";
import { Colors } from "../styles/colors";
import Flecha from "../assets/fecha.svg"
const Login = () => {
  const handleChange = () => {
    setColorIcon(true);
    setTimeout(() => {
      setColorIcon(false);
    }, 3000);
  };
  const handleChange1 = () => {
    setColorIcon1(true);
    setTimeout(() => {
      setColorIcon1(false);
    }, 3000);
  };
  const filter =
    "invert(47%) sepia(29%) saturate(1531%) hue-rotate(182deg) brightness(98%) contrast(95%)";
  const [ColorIcon, setColorIcon] = useState(false);
  const [ColorIcon1, setColorIcon1] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navegate = useNavigate();
  const { setLogged } = useNavContext();
  const { user, setUser } = useuserContext();

  const enviar = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (response.ok) {
      const responsejson = await response?.json();
      setUser(responsejson.user[0]);
      localStorage.setItem("user", JSON.stringify(responsejson.user[0]));
      setLogged(true);
      setUser((user) => ({ ...user, isLogged: true }));
      navegate("/");
    }
  };
  return (
    <Container>
      <Divform>
        <form>
          <img src={Hospital} alt="" />
          <p>Bienvenido de nuevo</p>
          <h1>Iniciar sesion</h1>
          <label >Email</label>
          <input
            type="text"
            placeholder=" "
            value={email}
            onChange={(e) => {
              handleChange1();
              setEmail(e.target.value);
            }}
          />
          <label >Contraseña</label>
          <input
            type="password"
            placeholder=" "
            value={password}
            onChange={(e) => {
              handleChange();
              setPassword(e.target.value);
            }}
          />
          <div>
            <button onClick={enviar}>Ingresar <img src={Flecha} alt="" /></button>
          </div>
        </form>
      </Divform>
      <div>
      </div>
    </Container>
  );
};

export default Login;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
const Divform = styled.div`
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
    box-shadow: 0px 5px 5px ${Colors.gray300};
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

