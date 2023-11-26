import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import "./css/indicadorFundo.css";

export default function Cliente() {
    return (
        <div>
            <Navbar
                title="CLIENTE"
                buttons={[
                    <a className="nav-button" href="../cliente/cadastro">Cadastro</a>,
                    <a className="nav-button" href="../cliente/listagem">Listagem</a>,
                    <a className="nav-button" href="../cliente/atualizar">Atualizar</a>,
                    <a className="nav-button" href="../cliente/deletar">Deletar</a>
                ]}
            />
            <Outlet />
        </div>
    );
}