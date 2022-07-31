import {Spinner} from "react-bootstrap";

function Carga() {
   return( 
       <div style={{ position: "fixed", top: "50%", left: "50%" }}>
            <Spinner animation="border" />
        </div>
   );
}

export default Carga;