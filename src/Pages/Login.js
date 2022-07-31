import React, { useContext, useState } from "react";
import "../Styles/styleRegistro.css";
import { Container, Form, Button, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import PieDePagina from "../Components/PieDePagina";
import AlertCustom from "../Components/AlertCustom";
import NetContext from "../Context/NetContext";
import firebase from "../Config/Firebase";

function Login() {
  const context = useContext(NetContext);
  const [spinner, setSpinner] = useState(false);
  const history = useHistory();
  const [alert, setAlert] = useState({
    variant: "",
    text: "",
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (event) => {
      setSpinner(true);

      let email = event.email;
      let password = event.password;

      firebase.auth
        .signInWithEmailAndPassword(email, password) //al crear usuario devuelve una promise
        .then((data) => {
          //console.log("Usuario logueado", data);
          setSpinner(false);
          context.loginUser();
          const textoDeAlert = "Usuario logueado con ";
          setAlert({ variant: "success", text: textoDeAlert + email });
          setTimeout(() => history.push("/login/login-success/"), 2000);
        })
        .catch((error) => {
          console.log("Error", error);
          setSpinner(false);
          const textoDeAlert = "Ha ocurrido un error: ";
          setAlert({ variant: "danger", text: textoDeAlert + error });
        });
    },
  });

  return (
    <>
      <div className="contenedorFormulario">
        <div className="formContainer">
          <Container>
            <h1 className="tituloFormulario">Loguearse</h1>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="mensajeError">
                    <h6>{formik.errors.email}</h6>
                  </div>
                ) : null}
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="mensajeError">
                    <h6>{formik.errors.password}</h6>
                  </div>
                ) : null}
              </Form.Group>

              <Button variant="secondary" type="submit" className="my-2" block>
                {spinner && (
                  <Spinner animation="border" variant="light" size="sm" />
                )}
                Enviar
              </Button>
            </Form>

            <AlertCustom
              variant={alert.variant}
              text={alert.text}
            ></AlertCustom>
          </Container>
        </div>
      </div>

      <PieDePagina />
    </>
  );
}

export default Login;
