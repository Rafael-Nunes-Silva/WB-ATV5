import { useState } from "react";
import { APIProduto } from "../../WB-ATV1/out/Interface/APIReact";

export default function CadastroProduto() {
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState(0);
    const [prodExiste, setProdExiste] = useState(false);

    function HandleSubmit() {
        APIProduto.AdicionarProduto(nome, valor);
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
                            if (APIProduto.GetProdutos().filter(prod => prod.nome === event.target.value).length <= 0) {
                                setNome(event.target.value);
                                setProdExiste(false);
                                return;
                            }
                            setProdExiste(true);
                        }}
                    />
                    {
                        prodExiste &&
                        <small className="alert-invalido">Um produto com esse nome já está cadastrado.</small>
                    }
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
                    !prodExiste &&
                    <button type="submit" className="sec-button">Cadastrar</button>
                }
            </div>
        </form>
    );
}