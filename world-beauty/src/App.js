import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import "./pages/css/indicadorFundo.css";

export default function App() {
  return (
    <div id="App">
      <Header
        buttons={[
          <a className="nav-button" href="../cliente">Cliente</a>,
          <a className="nav-button" href="../produto">Produto</a>,
          <a className="nav-button" href="../servico">Serviço</a>
        ]}
      />
      <div id="App-body">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}