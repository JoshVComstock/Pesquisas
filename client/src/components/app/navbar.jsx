import { Outlet, useNavigate } from "react-router-dom";
import { useNavContext } from "../../context/navcontext";
import { useuserContext } from "../../context/userContext";
import AdminComponent from "./routesToRole/admin";
import LaboratorioComponent from "./routesToRole/laboratorio";
import Recepcionista from "./routesToRole/recepcionista";
import { useState } from "react";
import { Divheader } from "../../styles/StylesCruds/CrudsStyle";
const Navbar = () => {
  const { logged } = useNavContext;
  const navegation = useNavigate();
  const [expandirNav, setExpandirNav] = useState(true);
  const { user, setUser } = useuserContext();
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  const Cerrasesion = () => {
    localStorage.removeItem("user");
    navegation("/login");
  };
  return (
    <>
      <Divheader>
        <nav>
          <section>
            <h1>
              <strong>Tamizaje</strong> Neonatal
            </h1>
            <button onClick={() => setExpandirNav(!expandirNav)}>=</button>
          </section>
          <article>
            <img src="src\img\avatar.png" alt="" />
            <select>
              <option>{user.nombre}</option>
            </select>
            <button onClick={Cerrasesion}>Salir</button>
          </article>
        </nav>
        <aside>
          {expandirNav && (
            <section props={expandirNav ? "expanded" : "collapsed"}>
              {user.rol == "administrador" && <AdminComponent />}
              {user.rol == "laboratorio" && <LaboratorioComponent />}
              {user.rol == "recepcionista" && <Recepcionista />}
            </section>
          )}
          <div>
            <Outlet />
          </div>
        </aside>
      </Divheader>
    </>
  );
};

export default Navbar;
