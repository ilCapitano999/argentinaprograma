import React, { Component } from "react";
import "../../Styles/styleProducto.css";
import { Container, CardDeck } from "react-bootstrap";
import PieDePagina from "../PieDePagina";
import Carga from "../Carga";
import Tarjetas from "./Tarjetas";
import firebase from "../../Config/Firebase";

class Productos extends Component {
  constructor() {
    super();
    this.state = {
      productosDesdeApi: [], //recibe un array vacio
      loading: true,
    };
  }

  componentDidMount() {
    firebase.db
      .collection("productos")
      .get()
      .then((querySnapshot) => {
        this.setState({
          productosDesdeApi: querySnapshot.docs, //son los documentos de la coleccion de firebase
          loading: false,
        })
      });
  }

  
  render() {
    if (this.state.loading) {
      return (
        <Container>
          <Carga />
        </Container>
      );
    } else {
      return (
        <>
          <div className="contenedorTarjetas">
            <CardDeck>
              {this.state.productosDesdeApi.map((datos) => (
                <Tarjetas key={datos.id} datosProducto={datos} />
              ))}
            </CardDeck>
          </div>
          <PieDePagina />
        </>
      );
    }
  }
}

export default Productos;
