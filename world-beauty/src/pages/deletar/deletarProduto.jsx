import { useState } from "react";
import { APIProduto } from "../../WB-ATV1/out/Interface/APIReact";
import Select from "../../components/select";

export default function DeletarProduto() {
    const [nomeProdSelecionado, setNomeProdSelecionado] = useState("");

    function HandleSubmit(event) {
        APIProduto.Deletar(nomeProdSelecionado);
    }

    return (
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
                        }}
                    />
                </div>
            </div>
            <div className="form-horizontal-div">
                <button type="submit" className="sec-button">Deletar</button>
            </div>
        </form>
    );
}