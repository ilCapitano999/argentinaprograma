import "./App.css";
import { BrowserRouter} from "react-router-dom";
import Menu from "./Pages/Menu/index";
import RoutesWeb from "./RoutesWeb/RouetesWeb";
import GlobalState from "./Context/GlobalState"


function App(){
  return(
    <>
      <GlobalState>
        <BrowserRouter>
            <Menu />
            <RoutesWeb />
        </BrowserRouter>
      </GlobalState>
    </>
  );
}
export default App;
