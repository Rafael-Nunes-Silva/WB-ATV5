import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import "./css/indicadorFundo.css";

export default function Servico() {
    return (
        <div>
            <Navbar
                title="SERVIÇO"
                buttons={[
                    <a className="nav-button" href="../servico/cadastro">Cadastro</a>,
                    <a className="nav-button" href="../servico/listagem">Listagem</a>,
                    <a className="nav-button" href="../servico/atualizar">Atualizar</a>,
                    <a className="nav-button" href="../servico/deletar">Deletar</a>
                ]}
            />
            <Outlet />
        </div>
    );
}