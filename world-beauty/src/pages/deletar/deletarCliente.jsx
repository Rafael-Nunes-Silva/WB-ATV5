import { useState } from "react";
import { APICliente } from "../../WB-ATV1/out/Interface/APIReact";
import Select from "../../components/select";

export default function DeletarCliente() {
    const [cpfSelecionado, setCpfSelecionado] = useState({});

    function HandleSubmit(event) {
        APICliente.Deletar(cpfSelecionado);
    }

    return (
        <form onSubmit={HandleSubmit} className="form">
            <div className="form-horizontal-div">
                <div className="form-vertical-div">
                    <label for="clientes">Clientes</label>
                    <Select
                        name="clientes"
                        options={APICliente.GetClientes().map(
                            (c) => ({ name: c.nome, value: c.CPF.valor })
                        )}
                        onChange={(event) => {
                            const selecionado = event.target.options[event.target.selectedIndex];
                            const cliente = APICliente.GetClientes().filter(cli => cli.nome === selecionado.innerText)[0];

                            setCpfSelecionado(cliente.CPF);
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