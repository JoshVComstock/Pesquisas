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
      <Divlogin>
        <Form>
          <Iavatar src={Avatar} alt="" />
          <H2>Tamizaje</H2>
          <P>Neonatal</P>
          <Divinput>
            <Di>
              <I>
                <Img src={User} alt="" ColorIcon={ColorIcon1} filter={filter} />
              </I>
            </Di>
            <Dinput>
              <Input
                type="text"
                placeholder=" "
                value={email}
                onChange={(e) => {
                  handleChange1();
                  setEmail(e.target.value);
                }}
              />
              <Label>Usuario</Label>
            </Dinput>
          </Divinput>
          <Divinput>
            <Di>
              <I>
                <Img src={Lock} alt="" ColorIcon={ColorIcon} filter={filter} />
              </I>
            </Di>
            <Dinput>
              <Input
                type="password"
                placeholder=" "
                value={password}
                onChange={(e) => {
                  handleChange();
                  setPassword(e.target.value);
                }}
              />
              <Label>Password</Label>
            </Dinput>
          </Divinput>
          <Boton onClick={ enviar}>Ingresar</Boton>
        </Form>
        <Section>
          <h3>Bienvenido al sistema</h3> <br />
          <P>Terminos y condiciones</P>{" "}
        </Section>
      </Divlogin>
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
  background: #ffffff;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
  color: #000000;
  &::before {
    position: absolute;
    content: "";
    background-color: #2b44d1;
    height: 100vh;
    width: 100vh;
    border-radius: 50vw 50vw;
    z-index: 1;
    left: -30%;
    top: -20%;
    box-shadow: 5px 5px 6px 8px rgba(0, 0, 0, 0.3);
  }
`;

const Section = styled.section`
  width: 300px;
  height: 100%;
  text-align: center;
  color: #ffffff;
  background-color: #2b44d1;
  display: flex;
  gap: 1em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    background-color: #d12bd17b;
    height: 100px;
    width: 100px;
    border-radius: 50px 50px;
    z-index: 1;
    right: 0;
    bottom: 0;
  }
  &::before {
    position: absolute;
    content: "";
    background-color: #510d669d;
    height: 100px;
    width: 100px;
    border-radius: 50px 50px;
    z-index: 1;
    right: 30px;
    bottom: 20px;
  }
`;
const Divlogin = styled.div`
  background-color: transparent;
  padding: 20px;
  border-radius: 5px;
  display: flex;

  width: 50%;
  height: 60%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.img`
  width: 25px;
  height: 25px;
  filter: ${(p) => (p.ColorIcon ? p.filter : "")};
`;
const H2 = styled.h2`
  font-size: 2.9rem;
  margin: 15px 0;
`;
const P = styled.h2`
  font-size: 1rem;
`;
const Divinput = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const I = styled.div``;
const Di = styled.i`
  display: flex;
  align-items: center;
`;
const Iavatar = styled.img`
  width: 75px;
  height: 75px;
`;
const Dinput = styled.div`
  position: relative;
  padding: 1rem;
  width: 100%;
`;
const Label = styled.label`
  position: absolute;
  top: 25px;
  left: 2rem;
  background: white;
  color: rgb(143, 143, 143);
  pointer-events: none;
  transition: all 0.5s;
  cursor: auto;
`;
const Input = styled.input`
  display: block;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  border: 0;
  outline: solid 2px rgb(143, 143, 143);
  &:focus {
    outline: solid 2px #4285f4;
  }
  &:focus + Label {
    transform: translateY(-1.2rem);
    font-size: 13px;
    color: #4285f4;
    background-color: #ffffff;
  }
  &:not(:placeholder-shown) + Label {
    transform: translateY(-1.2rem);
    transition: 0.5s;
    font-size: 13px;
  }
`;
const Span1 = styled.span`
  position: absolute;
  background: #000;
  width: 100%;
  height: 1.5px;
  top: 0;
  left: -100%;
  transition: 0.6s;
`;
const Boton = styled.button`
  width: 100%;
  position: relative;
  padding: 10px 0;
  border: none;
  outline: none;
  background: #0e2447;
  color: #fff;
  cursor: pointer;
  transition: 0.8s;
  overflow: hidden;
  font-size: 17px;

  &:hover {
    background: #ffffffa9;
    color: #4285f4;
  }
`;
