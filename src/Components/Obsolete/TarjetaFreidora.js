import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import imgFreidora from "../../img/imagenFreidora.PNG";
import {Link} from "react-router-dom";


function TarjetaFreidora(props) {
  return (
    <div>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgFreidora} />
        <Card.Body>
          <Card.Title>Freidora sin aceite</Card.Title>
          <Card.Text>{"Freidora sin aceite de última generación!"}</Card.Text>
          <div>
          <Link to={"/producto/freidora"}><Button variant="primary" size="lg" block>
              Ver detalle
            </Button>
          </Link>
          </div>
        </Card.Body>
        
      </Card>
      </div>

  );
}

export default TarjetaFreidora;
