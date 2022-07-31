import {Route} from "react-router-dom"
import Home from "../Pages/Home"
import Registro from "../Pages/Registro"
import Login from "../Pages/Login"
import Logueado from "../Pages/Logueado"
import Registrado from "../Pages/Registrado"
import ProductosAPI from "../Components/Productos/ProductosAPI"

function RoutesWeb() {
    return(
        <>
        <Route path="/" exact component={Home} />
        <Route path="/registro" exact component={Registro} />
        <Route path="/registro/registro-success" exact component={Registrado} />
        <Route path="/login" exact component={Login} />
        <Route path="/login/login-success" exact component={Logueado} />
        <Route path="/productos/:id" exact component={ProductosAPI} />
        </>
    );
    
}

export default RoutesWeb;