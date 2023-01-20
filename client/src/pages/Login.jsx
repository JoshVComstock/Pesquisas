import React from "react";
import styled from "styled-components";
import Avatar from "../img/medical-team.png";
import User from "../img/user.png";
import Lock from "../img/lock.png";
import { useState } from "react";
const Login = () => {
    const handleChange=()=>{
        setColorIcon(true);
        setTimeout(() => {
            setColorIcon(false);
        }, 3000);
    }
    const handleChange1=()=>{
        setColorIcon1(true);
        setTimeout(() => {
            setColorIcon1(false);
        }, 3000);
    }
    const filter="invert(47%) sepia(29%) saturate(1531%) hue-rotate(182deg) brightness(98%) contrast(95%)";
    //useffect actualizacion, ejecute al inicio
    //usestate cambia el valor de forma dinamica
    //set almacenar
    //no set operaciones
    const [ColorIcon,setColorIcon]=useState(false);
    const [ColorIcon1,setColorIcon1]=useState(false);
  return (
    <Container>
      <Divlogin>
        <Form>
          <Iavatar src={Avatar} alt="" />
          <H2>Bienvenido</H2>
          <Divinput>
            <Di>
              <I>
                <Img src={User} alt="" ColorIcon={ColorIcon1} filter={filter} />
              </I>
            </Di>
            <Dinput>
              <Input type="text" placeholder=" "  onChange={handleChange1} />
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
              <Input type="password" placeholder=" " onChange={handleChange} />
              <Label >Password</Label>
            </Dinput>
          </Divinput>
          <Boton>
            Entrar
          </Boton>
        </Form>
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
`;
const Divlogin=styled.div`
    padding: 20px;
    border-radius: 5px;
    display: flex;
    box-shadow: 5px 5px 6px 8px rgba(0,0,0,.3);
`;
const Form=styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Img = styled.img`
  width: 25px;
  height: 25px;
  filter: ${p=>p.ColorIcon ? p.filter :''};
`;
const H2 = styled.h2`
  font-size: 2.9rem;
  text-transform: uppercase;
  margin: 15px 0;
  color: #333;
`;
const Divinput = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 5px 0;
  
`;
const I = styled.div`
`;
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
`;
const Label=styled.label`
    position: absolute;
    top: 25px;
    left: 2rem;
    background: white;
    color: rgb(143,143,143);
    
    transition: all .5s;
    cursor: auto;
`;
const Input = styled.input`
  
  display: block;
  padding: .5rem 2rem;
  border-radius: 5px;
  border: 0;
  outline: solid 2px rgb(143,143,143);
  &:focus{
    outline: solid 2px #4285f4;
  }
   &:focus+Label{
    transform: translateY(-1.2rem);
    font-size: 13px;
    color:#4285f4 ;
  }
  &:not(:placeholder-shown)+Label{
   transform: translateY(-1.2rem);
   transition: .5s;
   font-size: 13px;
  }
  
`;
const Span1=styled.span`
  position: absolute;
  background: #000;
  width: 100%;
  height: 1.5px;
  top: 0;
  left: -100%;
  transition: 0.6s;
  
`;
const Boton=styled.button`
  margin: 10px;
  width: 50%;
  position: relative;
  padding: 10px 15px;
  border: none;
  outline: none;
  background: #4285f4;
  color: #fff;
  cursor: pointer;
  transition: .8s;
  overflow: hidden;
  font-size: 17px;
  border: 1px solid white;
  border-radius: 25px;
  &:hover{
    background: #6e9fef;
  }
  
`;



