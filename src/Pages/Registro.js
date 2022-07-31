import React, { useState, useContext } from "react";
import { Container, Form, Button, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import AlertCustom from "../Components/AlertCustom";
import { useHistory } from "react-router-dom";
import firebase from "../Config/Firebase";
import NetContext from "../Context/NetContext";
import "../Styles/styleRegistro.css";
import PieDePagina from "../Components/PieDePagina";

function Registro() {
  const context = useContext(NetContext);
  const [alert, setAlert] = useState({
    variant: "",
    text: "",
  });

  const [spinner, setSpinner] = useState(false);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (event) => {
      setSpinner(true);

      let email = event.email;
      let password = event.password;

      firebase.auth
        .createUserWithEmailAndPassword(email, password) //al crear usuario devuelve un +promise
        .then((data) => {
          //console.log("Usuario creado", data.user.uid);
          const textoDeAlert = "Usuario creado con exito ";
          setAlert({ variant: "success", text: textoDeAlert });
          setAlert({ variant: "success", text: textoDeAlert + email });
          setTimeout(() => history.push("/registro/registro-success/"), 2000);

          firebase.db
            .collection("usuarios")
            .add({
              //inserta datos en la tabla "usuarios "
              nombre: event.nombre,
              apellido: event.apellido,
              email: event.email,
              userId: data.user.uid,
            })
            .then((data) => {
              setSpinner(false);
              context.loginUser();
              //console.log(data);
              //history.push("/login");
              const user = firebase.auth.currentUser;
              user.sendEmailVerification();
            })
            .catch((error) => {
              console.log(error);
              setSpinner(false);
              const textoDeAlert = error;
              setAlert({ variant: "danger", text: textoDeAlert });
            });
        })
        .catch((error) => {
          console.log("Error", error);
          setSpinner(false);
          const textoDeAlert = error;
          setAlert({ variant: "success", text: textoDeAlert });
        });
    },
    validate: (values) => {
      let errors = {};

      if (!values.nombre) {
        errors.nombre = "Campo obligatorio.";
      } else if (values.nombre.length > 15) {
        errors.firstName = "Debe tener 15 caracteres o menos";
      }

      if (!values.apellido) {
        errors.apellido = "Campo obligatorio.";
      } else if (values.apellido.length > 15) {
        errors.apellido = "Debe tener 15 caracteres o menos";
      }

      if (!values.email) {
        errors.email = "Campo obligatorio.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Email invalido";
      }
      if (!values.password) {
        errors.password = "Campo obligatorio.";
      } else if (values.password.length < 6) {
        errors.password = "Debe tener 6 caracteres o mas";
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = "Campo obligatorio.";
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Las contraseñas no coinciden";
      } else if (values.password.length < 6) {
        errors.confirmPassword = "Debe tener 6 caracteres o mas";
      }

      return errors;
    },
  });

  return (
    <>
      <div className="contenedorFormulario">
        <div className="formContainer">
          <Container>
            <h1 className="tituloFormulario">Registrarse</h1>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group controlId="formBasicNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar nombre"
                  name="nombre"
                  value={formik.values.nombre}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.nombre && formik.errors.nombre ? (
                  <div className="mensajeError">
                    <h6>{formik.errors.nombre}</h6>
                  </div>
                ) : null}
              </Form.Group>

              <Form.Group controlId="formBasicApellido">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar apellido"
                  name="apellido"
                  value={formik.values.apellido}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.apellido && formik.errors.apellido ? (
                  <div className="mensajeError">
                    <h6>{formik.errors.apellido}</h6>
                  </div>
                ) : null}
              </Form.Group>

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
                <Form.Label>Ingrese contraseña</Form.Label>
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

              <Form.Group controlId="formConfirmPassword">
                <Form.Label>Confirme contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className="mensajeError">
                    <h6>{formik.errors.confirmPassword}</h6>
                  </div>
                ) : null}
              </Form.Group>

              <Button variant="secondary" type="submit" className="my-2" block>
                {spinner && (
                  <Spinner animation="border" variant="light" size="sm" />
                )}
                Registrarse
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

export default Registro;
