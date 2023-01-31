import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logos from "../../img/logoo.jpg";
import { useNavContext } from "../../context/navcontext";
import { useuserContext } from "../../context/userContext";
import Login from "../../pages/Login";
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
            <Imge src={Logos} alt="" />
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
  overflow-x: scroll;
  overflow-y: hidden;
  overflow-x: hidden;
`;
const Header = styled.header`
  min-width: 250px;
  height: 100vh;
  background: #22577a;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 10%);
`;
const Img = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 10px;
  filter: invert(99%) sepia(6%) saturate(2%) hue-rotate(92deg) brightness(112%)
    contrast(100%);
`;
const Linkes = styled(Link)`
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
const Imge = styled.img``;
const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0px 10px 0px;
`;
const Navuser = styled.div`
  min-width: calc(100% - 250px);
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Topnav = styled.div`
  max-width: 100%;
  background: #e2e2e9;
  display: flex;
  justify-content: flex-end;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
`;
const Topnavimg = styled.img`
  width: 33px;
  height: 33px;
  margin: 3px;
  background-color:transparent;
`;
const Logout = styled.button`
  background: none;
  margin: 0 15px;
  cursor: pointer;
  color:#fff;
  &:hover {
    color: #94b5e6;
    text-decoration: underline;
  }
`;
const User = styled.div`
  display: flex;
  color:#fff;
  flex-direction: column;
  align-items: center;
  margin-right: 35px;
`;
const Nameuser = styled.label`
  cursor: pointer;
  margin: 2px;
  &:hover {
    color: #0066ff;
  }
`;
