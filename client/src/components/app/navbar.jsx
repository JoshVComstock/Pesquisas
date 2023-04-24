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
            <H>Tamizaje</H>
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
  min-width: 280px;
  height: 100vh;
  background:rgb(10, 74, 138);
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 8px 2px;
`;
const Imge = styled.img``;
const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0px 3em 0px;
`;
const Navuser = styled.div`
  min-width: calc(100% - 280px);
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Topnav = styled.div`
  width: 90%;
  background: rgb(243, 246, 249);
  display: flex;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  gap:1em;
  margin:0 auto;

`;
const Topnavimg = styled.img`
  width: 30px;
  height: 30px;
  margin: 1px;
  background-color:transparent;
`;
const Logout = styled.button`
  background: #142033;
  cursor: pointer;
  color:#ffffff;
  padding: 0.1em 2.5em;
  height: 2em;
  border-radius: 1em;
  transition:all 1s;
  &:hover {
    background: blue;
    color: #fff;
  }
`;
const User = styled.div`
  display: flex;
  color:#ffffff;
  flex-direction: column;
  align-items: center;
  margin-right: 35px;
  background: #142033;
  padding: 0 2.5em;

`;
const Nameuser = styled.label`
  cursor: pointer;
  margin: 2px;
  &:hover {
    color: #0066ff;
  }
`;
const H = styled.h1`
    color: rgb(0, 156, 255);
 font-size:1.3em;

font-weight:lighter;
margin:0 10px;
&::first-letter{
font-size: 1.5em;
}
`;

