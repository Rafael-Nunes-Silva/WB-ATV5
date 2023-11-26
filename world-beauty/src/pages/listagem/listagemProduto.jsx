import { useState } from "react";
import { APIProduto } from "../../WB-ATV1/out/Interface/APIReact";
import PopupListagem from "../../components/popupListagem";

export default function ListagemProduto() {
    const [listagem, setListagem] = useState([]);
    const [mostrarResultado, setMostrarResultado] = useState(false);
    function ListarTodos () {
        setListagem(APIProduto.GetProdutos().map((value) =>
            <>
                <div className="resultado-lista-item">
                    <p>{value.nome}</p>
                    <p>R$ {value.valor}</p>
                </div>
                <hr />
            </>
        ));
        setMostrarResultado(true);
    }

    return (
        <div>
            {
                mostrarResultado &&
                <PopupListagem
                    title="Listar Todos"
                    CloseCallback={() => setMostrarResultado(false)}
                    listagem={listagem}
                />
            }
            <div className="buttons-listagem">
                <button className="button" onClick={ListarTodos}>Listar Todos</button>
            </div>
        </div>
    );
}