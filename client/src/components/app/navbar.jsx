import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Logos from "../../img/logoo.jpg";
import { useNavContext } from "../../context/navcontext";
import { useuserContext } from "../../context/userContext";
import AdminComponent from "./routesToRole/admin";
import LaboratorioComponent from "./routesToRole/laboratorio";

const Navbar = () => {
  const { logged } = useNavContext;
  const navegation = useNavigate();
  const { user, setUser } = useuserContext();
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  const Cerrasesion = async () => {
    localStorage.removeItem("user");
    navegation("/login");
  };

  return (
    <>
      <Divheader>
        <Topnav>
          <Logo>
            <H>Tamizaje</H>
          </Logo>
          <User>
            <Topnavimg src="src\img\avatar.png" alt="" />
          </User>
          <Select>
            <Option>{user.nombre}</Option>
            <Option>
              <Logout onClick={Cerrasesion}>Salir</Logout>
            </Option>
          </Select>
        </Topnav>
        <Header>{user.rol == "laboratorio" && <LaboratorioComponent />}</Header>
        <Navuser>
          <Header>
            {user.rol == "administrador" && <AdminComponent />}
            {user.rol == "laboratorio" && <LaboratorioComponent />}
          </Header>
          <Divo>
            <Outlet />
          </Divo>
        </Navuser>
      </Divheader>
    </>
  );
};

export default Navbar;
const Divheader = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;


const Select = styled.select`
  border: none;
  text-align: center;
  transition: height 0.5s ease;
  outline: none;
  cursor: pointer;
`;

const Option = styled.option`
  outline: none;
  border: none;
  text-align: start;
  color: blue;

  &::first-letter {
    font-size: 1.2em;
  }
`;
const Topnav = styled.div`
  width: 100%;
  height: 12vh;
  background-color: #fdfdfd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  box-shadow: 0px 0px 2px 0px #0000004e;
  padding: 0 3em;
  z-index: 2;
`;

const Logo = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Navuser = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const Topnavimg = styled.img`
  height: 35px;
  filter: saturate(0%);
`;
const Logout = styled.button``;
const User = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const H = styled.h1`
  color: #000000;
  font-size: 1.3em;
  &::first-letter {
    font-size: 1.2em;
    color: blue;
  }
`;
const Divo = styled.div`
  width: 100%;

`;
const Header = styled.header`
  width: 300px;
  box-shadow: 0px 0px 2px 0px #0000004e;
  z-index: 1;
  height: 100%;
`;
