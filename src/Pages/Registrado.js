import React from "react";
import { Container, Form } from "react-bootstrap";
import PieDePagina from "../Components/PieDePagina";

import "../Styles/styleRegistro.css";

function Registrado() {
  return (
    <>
      <div className="contenedorFormulario">
        <div className="formContainer">
          <Container>
            <h1 className="tituloFormulario">Registro</h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Registro exitoso! Bienvenida/o</Form.Label>
              </Form.Group>
            </Form>
          </Container>
        </div>
      </div>
      <PieDePagina />
    </>
  );
}

export default Registrado;