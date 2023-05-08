import React from "react";
import styled from "styled-components";
import Avatar from "../img/medical-team.png";
import User from "../img/user.jpg";
import Lock from "../img/lock.png";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useNavContext } from "../context/navcontext";
import { useuserContext } from "../context/userContext";
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
      /*       console.log(responsejson.user) */
      setUser(responsejson.user[0]);
      /*  document.cookie = `token=${responsejson.access_token}; max-age=${60 * 60};
        path=/; somesite=stric`; */
      /*      document.cookie = `user=${JSON.stringify(responsejson.user[0])}; max-age=${60 * 60 * 24};
        path=/; somesite=stric`; */
      localStorage.setItem("user", JSON.stringify(responsejson.user[0]));
      setLogged(true);
      setUser((user) => ({ ...user, isLogged: true }));
      navegate("/");
    }
  };
  return (
    <Container>
      <article>
        <div>
          <form>
            <h1>bienvenido</h1>
            <p>Tamizaje Neonatal</p>
            <section>
              <img src={User} alt="icono" />
              <label>Usuario</label>
            </section>
            <input
              type="text"
              placeholder=" "
              value={email}
              onChange={(e) => {
                handleChange1();
                setEmail(e.target.value);
              }}
            />
            <section>
              <img src={Lock} alt="img" />
              <label>Password</label>
            </section>
            <input
              type="password"
              placeholder=" "
              value={password}
              onChange={(e) => {
                handleChange();
                setPassword(e.target.value);
              }}
            />
            <button onClick={enviar}>Ingresar</button>
            <p>Terminos y condiciones</p>
          </form>
        </div>
        <section>
          <div>
            <section>
              <h3>"En cada latido de tu corazón, reside el poder de cuidar"</h3>
            </section>
          </div>
        </section>
      </article>
    </Container>
  );
};

export default Login;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to right,
    rgb(196, 219, 245) 50%,
    rgb(29, 30, 107) 50%
  );
  background-repeat: no-repeat;
  background-attachment: fixed;

  & > article {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    width: 60%;
    height: 70%;
    border-radius: 0.5em;
    & > div {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 2em;
      & img {
        width: 15px;
      }
      & form {
        width: 65%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 0.5em;
        & h1 {
          text-transform: uppercase;
          font-weight: 100;

          &::first-letter {
            font-weight: 100;
            font-size: 1.8em;
            color: rgb(29, 30, 107);
          }
        }
        & p {
          margin: 0 0 2em 0;
        }
        & label {
          font-size: 1em;
        }
        & input {
          width: 100%;
          padding: 0.7em 0;
          background-color: transparent;
          border: solid 1px #0002;
          border-radius: 0.4em;
        }
        & button {
          background-color: rgb(95, 61, 179);
          color: #fff;
          width: 100%;
          padding: 0.5em 0;
          font-weight: 100;
          font-size: 1em;
          cursor: pointer;
          transition:all 0.5s ease-in-out;
          &:hover{
            background-color:#fff1;
            color:rgb(95, 61, 179);
          }
        }
      }
    }
    & > section {
      width: 50%;
      height: 100%;
      background-color: rgb(217, 218, 225);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
      & div {
        width: 10em;
        height: 10em;
        border-radius: 50%;
        background-color: rgb(95, 61, 179);
        transition:all 0.5s ease-in-out;
        &:hover {
          background-color:transparent;
          & section {
            display: flex;
            text-transform:uppercase;
z-index:2;
font-size:0.8em;

            &::first-letter{
              color:rgb(95, 61, 179);
              font-size:0.8em;
            }
          }
        }
      }
      &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 50%;
        bottom: 0;
        backdrop-filter: blur(16px) saturate(180%);
        -webkit-backdrop-filter: blur(16px) saturate(180%);
        background-color: rgba(255, 255, 255, 0.307);
      }
      & section {
        display: none;
      }
    }
  }
`;
