import { useState } from "react";
import { APIServico } from "../../WB-ATV1/out/Interface/APIReact";

export default function CadastroProduto() {
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState(0);
    const [servExiste, setServExiste] = useState(false);

    function HandleSubmit() {
        APIServico.AdicionarServico(nome, valor);
    }

    return (
        <form onSubmit={HandleSubmit} className="form">
            <div className="form-horizontal-div">
                <div className="form-vertical-div">
                    <label for="nome">Nome</label>
                    <input
                        name="nome"
                        placeholder="Nome"
                        type="text"
                        onChange={(event) => {
                            if (APIServico.GetServicos().filter(serv => serv.nome === event.target.value).length <= 0) {
                                setNome(event.target.value);
                                setServExiste(false);
                                return;
                            }
                            setServExiste(true);
                        }}
                    />
                </div>
            </div>
            <div className="form-horizontal-div">
                <div className="form-vertical-div">
                    <label for="valor">Valor</label>
                    <input
                        name="valor"
                        placeholder="0"
                        type="number"
                        onChange={(event) => { setValor(event.target.value) }}
                    />
                </div>
            </div>
            <div className="form-horizontal-div">
                {
                    !servExiste &&
                    <button type="submit" className="sec-button">Cadastrar</button>
                }
            </div>
        </form>
    );
}