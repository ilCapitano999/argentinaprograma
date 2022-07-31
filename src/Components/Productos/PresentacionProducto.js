import React, { useState } from "react";
import "../../Styles/styleProducto.css";
import { Container, Card, Figure, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AlertCustom from "../AlertCustom";
import NetContext from "../../Context/NetContext";
import firebase from "../../Config/Firebase";
 
function PresentacionProducto(props) {
  const { producto } = props;
  const [stateStock, setStock] = useState(producto.stock);
  const [alert, setAlert] = useState({
    variant: "",
    text: "",
  });

  function handleClickAPI() {
    subtractStock();
    //showAgradecimiento();
  }

  function showAgradecimiento() {
    //setAgradecimiento("Muchas gracias por su compra!");
    const textoDeAlert = "Muchas gracias por su compra!";
    setAlert({ variant: "success", text: textoDeAlert });
  }

  function subtractStock() {  //esta funcion actualiza el stock automaticamente despues de una "compra"
    setStock(stateStock > 1 ? stateStock - 1 : "Sin Stock");
    
    firebase.db.doc("productos/"+ props.id)
    .update({
      stock: firebase.firestore.FieldValue.increment(-1)
    }, {merge: true})
    .then(function() {
      showAgradecimiento();
    })
    .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
      const textoDeAlert = "Ha ocurrido un error: ";
      setAlert({ variant: "danger", text: textoDeAlert + error });
    });
  }

  return (
    <NetContext.Consumer>
      {(context) => (
        <div className="contenedorTarjetas">
          <div>
            <Container>
              <Card className="text-center">
                <Card.Header className="estiloTarjetaProducto">
                  Productos en Compras Locas
                </Card.Header>
                <Figure className="estiloTarjetaProducto">
                  <Figure.Image
                    width={250}
                    height={200}
                    alt="imagen Producto"
                    src={producto.photo_url}
                  />
                </Figure>
                <Card.Body className="estiloTarjetaProducto">
                  <Card.Title>{producto.name}</Card.Title>
                  <Card.Text className="text-justify ">
                    {producto.description}
                  </Card.Text>
                  <Card.Text className="text-center">
                    Precio: ${Math.round(producto.price * 150)}
                  </Card.Text>
                  <Card.Text className="text-center">
                    Stock disponible: {stateStock}
                  </Card.Text>

                  {context.login && (
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={handleClickAPI}
                    >
                      Comprar
                    </Button>
                  )}

                  {!context.login && (
                    <Link to={"/login/"}>
                      <Button variant="primary">Loguearse para comprar</Button>
                    </Link>
                  )}

                  <AlertCustom
                    variant={alert.variant}
                    text={alert.text}
                  ></AlertCustom>
                </Card.Body>
              </Card>
            </Container>
          </div>
        </div>
      )}
    </NetContext.Consumer>
  );
}

export default PresentacionProducto;