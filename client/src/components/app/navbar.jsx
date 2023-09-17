import { Outlet, useNavigate } from "react-router-dom";
import { useNavContext } from "../../context/navcontext";
import { useuserContext } from "../../context/userContext";
import AdminComponent from "./routesToRole/admin";
import LaboratorioComponent from "./routesToRole/laboratorio";
import Recepcionista from "./routesToRole/recepcionista";
import { useState } from "react";
import { Divheader } from "../../styles/StylesCruds/CrudsStyle";
import Logout from "../../assets/iconsnav/sign-out-alt-solid.svg";
import Docuser from '../../assets/iconsnav/user-md-solid.svg';
const Navbar = () => {
  const navegation = useNavigate();
  const [expandirNav, setExpandirNav] = useState(true);
  const { user } = useuserContext();
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
            <button onClick={() => setExpandirNav(!expandirNav)}>◀</button>
          </section>
          <article>
            <div>
              <img src={Docuser} alt="" />
              <p>{user.nombre}</p>
            </div>
            <button onClick={Cerrasesion}><img src={Logout} alt="" /> Salir</button>
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
