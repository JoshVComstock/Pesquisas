import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled, {keyframes} from "styled-components";
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
/*     const token = getCookie("token"); 
    const response = await fetch("http://127.0.0.1:8000/api/logout", {
      method: "GET",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      document.cookie = `token=; max-age=0`;
      setUser({ isLogged: false });
      console.log("llego");
      navegation("/login");
    } */
    localStorage.removeItem("user");
    navegation("/login");
  };
 
  return (
    <>
        <Divheader>
       
        <Header>
          <Logo>
            <H>TAMIZAJE</H>
          </Logo>
       {user.rol == "administrador" && (
       <AdminComponent/>
       )}

       {user.rol == "laboratorio" && (
             <LaboratorioComponent />
       )}


        </Header>
        <Navuser>
          <Topnav>
            <Logout onClick={Cerrasesion}>Salir</Logout>
            <User>
              <Topnavimg src="src\img\avatar.png" alt="" />
              <Nameuser>{user.nombre}</Nameuser>
            </User>
          </Topnav>
          <Outlet />
        </Navuser>
      </Divheader>
    </>
  );
};

export default Navbar;

const Divheader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = styled.header`
  min-width: 240px;
  height: 100vh;
  background:rgb(243, 246, 249);
  display: flex;
  flex-direction: column;
`;
const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0px 3em 0px;
  border-radius:50%;
`;
const Navuser = styled.div`
  min-width: calc(100% - 240px);
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Topnav = styled.div`
  width: 90%;
  height: 7vh;
  background: rgb(243, 246, 249);
  display: flex;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  gap:0.2em;
  margin:0 auto;

`;
const Topnavimg = styled.img`
  width: 30px;
  height: 30px;
  background-color:transparent;
  border-radius:50%;
`;
const Logout = styled.button`
  background: #4c8cf5;
  cursor: pointer;
  color:#ffffff;
  padding: 0.1em 2.5em;
  height: 2em;
  border-radius: 0.4em;
  transition:all 1s;
  &:hover {
    background: rgb(255, 255, 255);
    color: #000;
  }
`;
const User = styled.div`
  display: flex;
  color:#000000;
  flex-direction: row;
  align-items: center;
  padding: 0 2.5em;
gap:1em;
`;
const Nameuser = styled.label`
  cursor: pointer;
  margin: 2px 0;
  &:hover {
    color: #rgb(0, 156, 255);
  }
`;
const H = styled.h1`
    color: rgb(0, 156, 255);
 font-size:1.3em;
margin:0 10px;
font-weight: 600;
&::first-letter{
font-size: 1.2em;


}
`;

