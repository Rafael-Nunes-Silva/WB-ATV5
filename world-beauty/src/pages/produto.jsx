import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import "./css/indicadorFundo.css";

export default function Produto() {
    return (
        <div>
            <Navbar
                title="PRODUTO"
                buttons={[
                    <a className="nav-button" href="../produto/cadastro">Cadastro</a>,
                    <a className="nav-button" href="../produto/listagem">Listagem</a>,
                    <a className="nav-button" href="../produto/atualizar">Atualizar</a>,
                    <a className="nav-button" href="../produto/deletar">Deletar</a>
                ]}
            />
            <Outlet />
        </div>
    );
}