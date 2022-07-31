import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Tarjetas(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.datosProducto.data().photo_url}
          height="160"
          width="100"
        />
        <Card.Body>
          <Card.Title>{props.datosProducto.data().name}</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </Card.Text>
          
          <div>
            <Link to={"/productos/" + props.datosProducto.id}>
              <Button variant="primary" size="lg" block>
                Ver detalle
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Tarjetas;
