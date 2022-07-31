import React, { useState, useEffect } from "react";
import imgFreidora from "../../img/imagenFreidora.PNG";
import "../../Styles/styleProducto.css";

function Freidora(props) {
  
  
  const datosFreidora= {
      title: "Freidora sin aceite",
      description:
        "Freír nunca fue tan fácil Su superficie antiadherente hará que tus alimentos no se peguen durante el proceso de cocción. El temporizador incluido te permitirá ajustar el tiempo que necesite lo que quieras degustar. Resultará ideal para disfrutar de papas fritas o bolitas de queso.",
      price: 12000,
      SKU: "AF-M125BAR1",
      stock: 3,
      agradecimiento: "",
      loading: true
    };

  useEffect(()=>{
    console.log("componente cargado");
    datosFreidora.loading=false;
  },[])


  const [stateStockFreidora, setStockFreidora] = useState(datosFreidora.stock);
  const [stateAgradecimientoFreidora, setAgradecimientoFreidora] = useState("");

  function subtractStockFreidora() {
    setStockFreidora(stateStockFreidora >= 2 ? stateStockFreidora - 1 : "Sin Stock");
  }

  function showAgradecimientoFreidora() {
    setAgradecimientoFreidora("Muchas gracias por su compra!");
  }

  function handleClickFreidora() {
    subtractStockFreidora();
    showAgradecimientoFreidora();
  }

   
      return(
    <div className="contenedorProducto">
      <div className="tarjetaVerDetalle">
        <img
          src={imgFreidora}
          alt="Freidora sin aceite"
          height="300"
          className="clase-imagenProducto"
        />
        <h1 className="stateOfProducto">{datosFreidora.title}</h1>
        
       
        <h3 className="stateOfProducto">{datosFreidora.description}</h3>
        <h4 className="stateOfProducto">SKU: {datosFreidora.SKU}</h4>
        <h2 className="stateOfProducto">Precio: ${datosFreidora.price}</h2>
        <h3 className="stateOfProducto">
          Catidad disponible: {stateStockFreidora}
        </h3>
        <button onClick={handleClickFreidora} className="stateOfProducto">
          Comprar
        </button>
        <h2 className="agradecimiento">{stateAgradecimientoFreidora}</h2>
      </div>
    </div>
  );
  
}

export default Freidora;