import { useState } from "react";
import { APIProduto } from "../../WB-ATV1/out/Interface/APIReact";
import Select from "../../components/select";

export default function AtualizarProduto() {
    const [nomeProdSelecionado, setNomeProdSelecionado] = useState("");
    const [valorProdSelecionado, setValorProdSelecionado] = useState("");
    const [valor, setValor] = useState(0);

    function HandleSubmit (event) {
        APIProduto.Atualizar(nomeProdSelecionado, valor);
    }

    return (
        <div>
            <form onSubmit={HandleSubmit} className="form">
                <div className="form-horizontal-div">
                    <div className="form-vertical-div">
                        <label for="produtos">Produtos</label>
                        <Select
                            name="produtos"
                            options={APIProduto.GetProdutos().map(
                                (p) => ({ name: p.nome, value: p.valor })
                            )}
                            onChange={(event) => {
                                const selecionado = event.target.options[event.target.selectedIndex];
                                setNomeProdSelecionado(selecionado.innerText);
                                setValorProdSelecionado(selecionado.value);
                            }}
                        />
                    </div>
                </div>
                <div className="form-horizontal-div">
                    <div className="form-vertical-div">
                        <label for="valor">Valor</label>
                        <input
                            name="valor"
                            placeholder={valorProdSelecionado}
                            type="number"
                            onChange={(event) => { setValor(event.target.value); }}
                        />
                    </div>
                </div>
                <div className="form-horizontal-div">
                    <button type="submit" className="sec-button">Atualizar</button>
                </div>
            </form>
        </div>
    );
}