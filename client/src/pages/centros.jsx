import React from "react";
import styled from "styled-components";
import "../pages/Estilos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const DatosCentros = [
  {
    id: 1,
    Nombre: "Santa Rosita",
    Direccion: "Av. Santa Rosita",
    Red: "Red Norte",
    Telefono: 70707070,
    Ciudad: "Santa Cruz",
    Area: "Laboratorio",
    Seguimiento: "SI",
    Contacto: 71710932,
  },
  {
    id: 2,
    Nombre: "Santa Rosita",
    Direccion: "Av. Santa Rosita",
    Red: "Red Norte",
    Telefono: 70707070,
    Ciudad: "Santa Cruz",
    Area: "Laboratorio",
    Seguimiento: "SI",
    Contacto: 71710932,
  },
  {
    id: 3,
    Nombre: "Santa Rosita",
    Direccion: "Av. Santa Rosita",
    Red: "Red Norte",
    Telefono: 70707070,
    Ciudad: "Santa Cruz",
    Area: "Laboratorio",
    Seguimiento: "SI",
    Contacto: 71710932,
  },
];

class Centros extends React.Component {
  state = {
    DatosCentros: DatosCentros,
    form: {
      id: "",
      Nombre: "",
      Direccion: "",
      Red: "",
      Telefono: "",
      Ciudad: "",
      Area: "",
      Seguimiento: "",
      Contacto: "",
    },
    ModalInsertar: false,
    ModalEditar: false,
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  MostrarModalInsertar = () => {
    this.setState({ ModalInsertar: true });
  };
  OcultarModalInsertar = () => {
    this.setState({ ModalInsertar: false });
  };
  MostrarModalEditar = (Registro) => {
    this.setState({ ModalEditar: true, form: Registro });
  };
  OcultarModalEditar = () => {
    this.setState({ ModalEditar: false });
  };
  Insertar = () => {
    var ValorNuevo = { ...this.state.form };
    ValorNuevo.id = this.state.DatosCentros.length + 1;
    var Lista = this.state.DatosCentros;
    Lista.push(ValorNuevo);
    this.setState({ DatosCentros: Lista, ModalInsertar: false });
  };
  Editar = (Dato) => {
    var Contador = 0;
    var Lista = this.state.DatosCentros;
    Lista.map((Registro) => {
      if (Dato.id == Registro.id) {
        Lista[Contador].Nombre = Dato.Nombre;
        Lista[Contador].Direccion = Dato.Direccion;
        Lista[Contador].Red = Dato.Red;
        Lista[Contador].Telefono = Dato.Telefono;
        Lista[Contador].Ciudad = Dato.Ciudad;
        Lista[Contador].Area = Dato.Area;
        Lista[Contador].Seguimiento = Dato.Seguimiento;
        Lista[Contador].Contacto = Dato.Contacto;
      }
      Contador++;
    });
    this.setState({ DatosCentros: Lista, ModalEditar: false });
  };
  Eliminar = (Dato) => {
    var Opcion = window.confirm(
      "¿Estas seguro que deseas eliminar este Registro?" + Dato.id
    );
    if (Opcion) {
      var Contador = 0;
      var Lista = this.state.DatosCentros;
      Lista.map((Registro) => {
        if (Registro.id == Dato.id) {
          Lista.splice(Contador, 1);
        }
        Contador++;
      });
      this.setState({ DatosCentros: Lista });
    }
  };

  render() {
    return (
      <div  className="body">
        <Container>
          <br />
          <div className="Centrar">
            <div className="Titulo">
              <tr>CENTROS DE SALUD</tr>
            </div>
          </div>
          <br />
          <div className="Juntar">
            <div>
              <button className="Agregar" onClick={() => this.MostrarModalInsertar()}>
                <span className="text">Registrar un Centro de Salud</span>
              </button>
            </div>
            <div class="input-group">
                {/*<div className="Buscar">
                  <ion-icon name="search-outline"></ion-icon>
                </div>*/}
                <input type="text" class="input" id="Buscador" name="Buscador" placeholder="Ingrese el Nombre de un Centro de Salud" autocomplete="off"/>
                <input class="button--submit" value="Buscar" type="submit"/>
            </div>
          </div>
          <br />
          <Table className="table">
            <thead className="thead">
              <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>DIRECCIÓN</th>
                <th>RED</th>
                <th>TELÉFONO</th>
                <th>CIUDAD</th>
                <th>ÁREA</th>
                <th>SEGUIMIENTO</th>
                <th>CONTACTO</th>
                <th className="Acciones">ACCIONES</th>
              </tr>
            </thead>
            <tbody className="tbody">
              {this.state.DatosCentros.map((elemento) => (
                <tr>
                  <td>{elemento.id}</td>
                  <td>{elemento.Nombre}</td>
                  <td>{elemento.Direccion}</td>
                  <td>{elemento.Red}</td>
                  <td>{elemento.Telefono}</td>
                  <td>{elemento.Ciudad}</td>
                  <td>{elemento.Area}</td>
                  <td>{elemento.Seguimiento}</td>
                  <td>{elemento.Contacto}</td>
                  <td>
                    <button
                      className="btn-Editar"
                      onClick={() => this.MostrarModalEditar(elemento)}
                    >
                      Actualizar
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn-Eliminar"
                      onClick={() => this.Eliminar(elemento)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.ModalInsertar}>
          <ModalHeader>
            <div>
              <h3>Ingrese un nuevo Centro</h3>
            </div>
          </ModalHeader>
          <ModalBody className="MBody">
            <FormGroup>
              <label>ID:</label>
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.DatosCentros.length + 1}
              />
            </FormGroup>
            <div className="EnLinea">
              <div class="inputbox">
                <input
                  required="required"
                  type="text"
                  name="Nombre"
                  onChange={this.handleChange}
                />
                <span>Nombre:</span>
                <i></i>
              </div>
              <div class="inputbox">
                <input
                  required="required"
                  type="text"
                  name="Direccion"
                  onChange={this.handleChange}
                />
                <span>Dirección:</span>
                <i></i>
              </div>
            </div>

            {/*<FormGroup>
            <label>Nombre:</label>
            <input className='form-control' name='Nombre' type="text" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <label>Dirección:</label>
            <input className='form-control' name='Direccion' type="text" onChange={this.handleChange}/>
          </FormGroup>*/}
            <FormGroup>
              <label>Red de Salud:</label>
              <input
                className="form-control"
                name="Red"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Teléfono:</label>
              <input
                className="form-control"
                name="Telefono"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Ciudad:</label>
              <input
                className="form-control"
                name="Ciudad"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Área:</label>
              <input
                className="form-control"
                name="Area"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Seguimiento de Casos:</label>
              <input
                className="form-control"
                name="Seguimiento"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Contacto:</label>
              <input
                className="form-control"
                name="Contacto"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={() => this.Insertar()}>
              Registrar
            </Button>
            <Button color="danger" onClick={() => this.OcultarModalInsertar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.ModalEditar}>
          <ModalHeader>
            <div>
              <h3>Editar Centro</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>ID:</label>
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            <FormGroup>
              <label>Nombre:</label>
              <input
                className="form-control"
                name="Nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Nombre}
              />
            </FormGroup>
            <FormGroup>
              <label>Dirección:</label>
              <input
                className="form-control"
                name="Direccion"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Direccion}
              />
            </FormGroup>
            <FormGroup>
              <label>Red de Salud:</label>
              <input
                className="form-control"
                name="Red"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Red}
              />
            </FormGroup>
            <FormGroup>
              <label>Teléfono:</label>
              <input
                className="form-control"
                name="Telefono"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Telefono}
              />
            </FormGroup>
            <FormGroup>
              <label>Ciudad:</label>
              <input
                className="form-control"
                name="Ciudad"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Ciudad}
              />
            </FormGroup>
            <FormGroup>
              <label>Área:</label>
              <input
                className="form-control"
                name="Area"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Area}
              />
            </FormGroup>
            <FormGroup>
              <label>Seguimiento de Casos:</label>
              <input
                className="form-control"
                name="Seguimiento"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Seguimiento}
              />
            </FormGroup>
            <FormGroup>
              <label>Contacto:</label>
              <input
                className="form-control"
                name="Contacto"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Contacto}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              color="success"
              onClick={() => this.Editar(this.state.form)}
            >
              Editar
            </Button>
            <Button color="danger" onClick={() => this.OcultarModalEditar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Centros;
