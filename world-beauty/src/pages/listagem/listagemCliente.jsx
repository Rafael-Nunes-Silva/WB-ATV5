import "../css/button.css";
import { useState } from "react";
import { APICliente } from "../../WB-ATV1/out/Interface/APIReact";
import PopupListagem from "../../components/popupListagem";

export default function ListagemCliente() {
    const [listagem, setListagem] = useState([]);
    const [qtd1, setQtd1] = useState(0);
    const [qtd2, setQtd2] = useState(0);
    const [qtd3, setQtd3] = useState(0);
    const [qtd4, setQtd4] = useState(0);
    const [qtd5, setQtd5] = useState(0);
    const [qtd6, setQtd6] = useState(0);
    const [qtd7, setQtd7] = useState(0);
    const [qtd8, setQtd8] = useState(0);
    const [genero, setGenero] = useState("");
    const [mostrarResultado, setMostrarResultado] = useState(false);

    function ListarTodos() {
        setListagem(APICliente.GetClientes().map((value) =>
            <>
                <p>{value.nome}</p><hr />
            </>
        ));
        setMostrarResultado(true);
    }
    function ListarTopXConsumoProdQtd(event) {
        if (qtd1 <= 0) return;
        setListagem(APICliente.GetTopXClientesConsumoProdutoQtd(qtd1).map((value) =>
            <>
                <p>{value.nome}</p><hr />
            </>
        ));
        setMostrarResultado(true);
        setQtd1(0);
        event.target.children[0].value = "";
    }
    function ListarTopXConsumoProdVal(event) {
        if (qtd2 <= 0) return;
        setListagem(APICliente.GetTopXClientesConsumoProdutoVal(qtd2).map((value) =>
            <>
                <p>{value.nome}</p><hr />
            </>
        ));
        setMostrarResultado(true);
        setQtd2(0);
        event.target.children[0].value = "";
    }
    function ListarSubXConsumoProdQtd(event) {
        if (qtd3 <= 0) return;
        setListagem(APICliente.GetSubXClientesConsumoProdutoQtd(qtd3).map((value) =>
            <>
                <p>{value.nome}</p><hr />
            </>
        ));
        setMostrarResultado(true);
        setQtd3(0);
        event.target.children[0].value = "";
    }
    function ListarSubXConsumoProdVal(event) {
        if (qtd4 <= 0) return;
        setListagem(APICliente.GetSubXClientesConsumoProdutoVal(qtd4).map((value) =>
            <>
                <p>{value.nome}</p><hr />
            </>
        ));
        setMostrarResultado(true);
        setQtd4(0);
        event.target.children[0].value = "";
    }
    function ListarTopXConsumoServQtd(event) {
        if (qtd5 <= 0) return;
        setListagem(APICliente.GetTopXClientesConsumoServicoQtd(qtd5).map((value) =>
            <>
                <p>{value.nome}</p><hr />
            </>
        ));
        setMostrarResultado(true);
        setQtd5(0);
        event.target.children[0].value = "";
    }
    function ListarTopXConsumoServdVal(event) {
        if (qtd6 <= 0) return;
        setListagem(APICliente.GetTopXClientesConsumoServicoVal(qtd6).map((value) =>
            <>
                <p>{value.nome}</p><hr />
            </>
        ));
        setMostrarResultado(true);
        setQtd6(0);
        event.target.children[0].value = "";
    }
    function ListarSubXConsumoServQtd(event) {
        if (qtd7 <= 0) return;
        setListagem(APICliente.GetSubXClientesConsumoServicoQtd(qtd7).map((value) =>
            <>
                <p>{value.nome}</p><hr />
            </>
        ));
        setMostrarResultado(true);
        setQtd7(0);
        event.target.children[0].value = "";
    }
    function ListarSubXConsumoServVal(event) {
        if (qtd8 <= 0) return;
        setListagem(APICliente.GetSubXClientesConsumoServicoVal(qtd8).map((value) =>
            <>
                <p>{value.nome}</p><hr />
            </>
        ));
        setMostrarResultado(true);
        setQtd8(0);
        event.target.children[0].value = "";
    }
    function ListarGenero(event) {
        if (genero === "") return;
        setListagem(APICliente.ClientesDoGenero(genero).map((value) =>
            <>
                <p>{value.nome}</p><hr />
            </>
        ));
        setMostrarResultado(true);
        setGenero("");
        event.target.children[0].value = "";
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
                <button className="button" onClick={ListarTopXConsumoProdQtd}>
                    Listar Top
                    <input onChange={event => { setQtd1(event.target.value || 0) }} placeholder="10" type="number" className="button-num-input" />
                    por Consumo de Produtos (Quantidade)
                </button>
                <button className="button" onClick={ListarTopXConsumoProdVal}>
                    Listar Top
                    <input onChange={event => { setQtd2(event.target.value || 0) }} placeholder="10" type="number" className="button-num-input" />
                    por Consumo de Produtos (Valor)
                </button>
                <button className="button" onClick={ListarSubXConsumoProdQtd}>
                    Listar Sub
                    <input onChange={event => { setQtd3(event.target.value || 0) }} placeholder="10" type="number" className="button-num-input" />
                    por Consumo de Produtos (Quantidade)
                </button>
                <button className="button" onClick={ListarSubXConsumoProdVal}>
                    Listar Sub
                    <input onChange={event => { setQtd4(event.target.value || 0) }} placeholder="10" type="number" className="button-num-input" />
                    por Consumo de Produtos (Valor)
                </button>
                <button className="button" onClick={ListarTopXConsumoServQtd}>
                    Listar Top
                    <input onChange={event => { setQtd5(event.target.value || 0) }} placeholder="10" type="number" className="button-num-input" />
                    por Consumo de Serviços (Quantidade)
                </button>
                <button className="button" onClick={ListarTopXConsumoServdVal}>
                    Listar Top
                    <input onChange={event => { setQtd6(event.target.value || 0) }} placeholder="10" type="number" className="button-num-input" />
                    por Consumo de Serviços (Valor)
                </button>
                <button className="button" onClick={ListarSubXConsumoServQtd}>
                    Listar Sub
                    <input onChange={event => { setQtd7(event.target.value || 0) }} placeholder="10" type="number" className="button-num-input" />
                    por Consumo de Serviços (Quantidade)
                </button>
                <button className="button" onClick={ListarSubXConsumoServVal}>
                    Listar Sub
                    <input onChange={event => { setQtd8(event.target.value || 0) }} placeholder="10" type="number" className="button-num-input" />
                    por Consumo de Serviços (Valor)
                </button>
                <button className="button" onClick={ListarGenero}>Listar por Genero
                    <input onChange={event => { setGenero(event.target.value) }} placeholder="Masculino" type="text" className="button-num-input" />
                </button>
            </div>
        </div>
    );
}