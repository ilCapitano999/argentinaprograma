import React, { useState, useEffect } from "react";
import "../../Styles/styleProducto.css";
import firebase from "../../Config/Firebase";
import PieDePagina from "../PieDePagina";
import Carga from "../Carga";
import PresentacionProducto from "./PresentacionProducto";

function ProductosAPI(props) {
  const [producto, setProducto] = useState({});
  const [carga, setCarga] = useState({
    loading: {
      cargaCompleta: 0,
    },
  });

  useEffect(() => {
    firebase.db
      .doc("productos/" + props.match.params.id)
      .get()
      .then((doc) => {
        setProducto(doc.data());
        setCarga({ cargaCompleta: 1 });
      })
      .catch((error) => console.log(error));
  }, []);

  if (!carga.cargaCompleta) {
    return <Carga />;
  } else {
    return (
      <>
        <PresentacionProducto producto={producto} id={props.match.params.id} />
        <PieDePagina />
      </>
    );
  }
}
export default ProductosAPI;
