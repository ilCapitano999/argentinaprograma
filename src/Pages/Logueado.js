import React from "react";
import { Container, Form } from "react-bootstrap";
import PieDePagina from "../Components/PieDePagina";

import "../Styles/styleRegistro.css";

function Logueado() {
  return (
    <>
      <div className="contenedorFormulario">
        <div className="formContainer">
          <Container>
            <h1 className="tituloFormulario">Loguearse</h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Usted se encuentra logueado conrrectamente</Form.Label>
              </Form.Group>
            </Form>
          </Container>
        </div>
      </div>
      <PieDePagina />
    </>
  );
}

export default Logueado;
