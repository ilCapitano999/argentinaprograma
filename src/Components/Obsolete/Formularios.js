import Col from 'react-bootstrap/Col'
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";


function Formularios(props) {
  return (
    <>
    <Form.Row >
      <Form.Group  controlId={props.datos.id}>
        <Form.Label column="true" xs={12} md={12} >{props.datos.etiqueta}</Form.Label>
        <Col xs={12} md={12} >
            <Form.Control 
            type={props.datos.tipo}
            placeholder={props.datos.placeholder}
        
            />
        </Col>
      </Form.Group>
      </Form.Row>   
    </>
  );
}

export default Formularios;
