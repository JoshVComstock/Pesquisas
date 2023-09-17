import React from "react";
import Hospital from "../assets/iconsLogin.jpg"
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useNavContext } from "../context/navcontext";
import { useuserContext } from "../context/userContext";
import Flecha from "../assets/fecha.svg";
import IconsLogin from "../assets/bg/undraw_medicine_b-1-ol (3).svg";
import toast from "react-hot-toast";
import { Container,Divform,Divimg } from "../styles/Login";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navegate = useNavigate();
  const { setLogged } = useNavContext();
  const { user, setUser } = useuserContext();
  const enviar = async (e) => {
    if (email == "" && password == "") {
      toast.error("Debe llenar los campos requeridos");
    }
    else if (email == "" && password.length > 0) {
      toast.error("Introduzca su email");
    }
    else if (email.length > 0 && password == "") {
      toast.error("Introduzca su contraseña");
    }
    else if (email.length > 0 && password.length > 0) {
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
        toast.success("Bienvenido al sistema!");
      }
      else {
        toast.error("Datos incorrectos");
      }
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

              setEmail(e.target.value);
            }}
          />
          <label >Contraseña</label>
          <input
            type="password"
            placeholder=" "
            value={password}
            onChange={(e) => {

              setPassword(e.target.value);
            }}
          />
          <div>
            <button onClick={enviar}>Ingresar <img src={Flecha} alt="" /></button>
          </div>
        </form>
      </Divform>
      <Divimg>
        <img src={IconsLogin} alt="" />
        <div>
        </div>
      </Divimg>
    </Container>
  );
};
export default Login;
