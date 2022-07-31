import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/styleMenu.css";
import OpcionMenu from "./OpcionesMenu";
import NetContext from "../../Context/NetContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function Menu() {
  const data = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/login",
      label: "Login",
    },
    {
      path: "/registro",
      label: "Registro",
    },
  ];

  return (
    <NetContext.Consumer>
      {(context) => (
        <div className="contenedorMenu">
          <Navbar bg="#f3f3f3" variant="light" collapseOnSelect expand="sm" fixed="top">
            <Navbar.Brand as={Link} to="/">
              Compras locas
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
            {!context.login && (
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                {data.map((opcion) => (
                  <OpcionMenu key={opcion.label} opcion={opcion} />
                ))}
              </Nav>
              </Navbar.Collapse>  
            )}

            {context.login && (
              <>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <OpcionMenu opcion={{ label: "Home", path: "/" }} />
                
                <Nav.Link onClick={context.logoutUser}>
                  Salir
                </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </>
            )}
          </Navbar>
        </div>
      )}
    </NetContext.Consumer>
  );
}

export default Menu;
