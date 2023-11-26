import { useState } from "react";
import { APIServico } from "../../WB-ATV1/out/Interface/APIReact";
import Select from "../../components/select";

export default function AtualizarServico() {
    const [nomeServSelecionado, setNomeServSelecionado] = useState("");
    const [valorServSelecionado, setValorServSelecionado] = useState("");
    const [valor, setValor] = useState(0);

    function HandleSubmit (event) {
        APIServico.Atualizar(nomeServSelecionado, valor);
    }

    return (
        <div>
            <form onSubmit={HandleSubmit} className="form">
                <div className="form-horizontal-div">
                    <div className="form-vertical-div">
                        <label for="servicos">Serviços</label>
                        <Select
                            name="servicos"
                            options={APIServico.GetServicos().map(
                                (s) => ({ name: s.nome, value: s.valor })
                            )}
                            onChange={(event) => {
                                const selecionado = event.target.options[event.target.selectedIndex];
                                setNomeServSelecionado(selecionado.innerText);
                                setValorServSelecionado(selecionado.value);
                            }}
                        />
                    </div>
                </div>
                <div className="form-horizontal-div">
                    <div className="form-vertical-div">
                        <label for="valor">Valor</label>
                        <input
                            name="valor"
                            placeholder={valorServSelecionado}
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