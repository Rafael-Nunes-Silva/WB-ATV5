import { useState } from "react";
import { APICliente, APIRG, APITelefone } from "../../WB-ATV1/out/Interface/APIReact";
import Select from "../../components/select";

export default function AtualizarCliente() {
    const [nome, setNome] = useState("");
    const [nomeSocial, setNomeSocial] = useState("");
    const [genero, setGenero] = useState("");
    const [CPF, setCPF] = useState({});
    const [RGs, setRGs] = useState([]);
    const [telefones, setTelefones] = useState([]);

    const HandleSetRGs = function (event) {
        const novosRGs = [];

        const input = event.target.value.split("\n");
        const inputFormatado = [];
        for (let i = 0; i < input.length; i++) {
            try {
                const matches = input[i].replace(" ", "").match(/(\d*).(\d{2}.\d{2}.\d{4})/);
                inputFormatado.push(`${matches[1]}, ${matches[2]}`);

                novosRGs.push(APIRG.NovoRG(matches[1], matches[2]));
            }
            catch {
                inputFormatado.push(`${input[i]}`);
            }
        }
        event.target.value = inputFormatado.join("\n");

        setRGs(novosRGs);
    }
    const HandleSetTelefones = function (event) {
        const novosTelefones = [];

        const input = event.target.value.split("\n");
        const inputFormatado = [];
        for (let i = 0; i < input.length; i++) {
            try {
                const matches = input[i].replace(/\D/g, '').match(/(\d{2})(\d{5})(\d{4})/);
                inputFormatado.push(`(${matches[1]}) ${matches[2]}-${matches[3]}`);

                novosTelefones.push(APITelefone.NovoTelefone(matches[1], matches[2] + matches[3]));
            }
            catch {
                inputFormatado.push(`${input[i]}`);
            }
        }
        event.target.value = inputFormatado.join("\n");

        setTelefones(novosTelefones);
    }

    function HandleSubmit(event) {
        APICliente.Atualizar(CPF, nome, nomeSocial, genero, RGs, telefones);
    }

    return (
        <div>
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
                                const cliente = APICliente.GetClientes().filter(cli => cli.CPF.valor === selecionado.value)[0];
                                
                                setCPF(cliente.CPF);
                                setNome(cliente.nome);
                                setNomeSocial(cliente.nomeSocial);
                                setGenero(cliente.genero);
                                setRGs(cliente.RGs.map(rg =>
                                    `${rg.valor}, ${rg.dataEmissao}`
                                ).join("\n"));
                                setTelefones(cliente.telefones.map(tel =>
                                    `(${tel.ddd}) ${tel.numero.slice(0, 5)}-${tel.numero.slice(5, 9)}`
                                ));
                            }}
                        />
                    </div>
                </div>
                <div className="form-horizontal-div">
                    <div className="form-vertical-div">
                        <label for="nome">Nome</label>
                        <input required
                            name="nome"
                            placeholder="Nome"
                            defaultValue={nome}
                            type="text"
                            onChange={(event) => { setNome(event.target.value) }}
                        />
                    </div>
                </div>
                <div className="form-horizontal-div">
                    <div className="form-vertical-div">
                        <label for="nomeSocial">Nome Social</label>
                        <input
                            name="nomeSocial"
                            placeholder="Nome Social"
                            defaultValue={nomeSocial}
                            type="text"
                            onChange={(event) => { setNomeSocial(event.target.value) }}
                        />
                    </div>
                    <div className="form-vertical-div">
                        <label for="genero">Genero</label>
                        <input
                            name="genero"
                            placeholder="Genero"
                            defaultValue={genero}
                            type="text"
                            onChange={(event) => { setGenero(event.target.value) }}
                        />
                    </div>
                </div>
                <div className="form-horizontal-div">
                    <div className="form-vertical-div">
                        <label for="rgs">RGs</label>
                        <textarea
                            name="rgs"
                            placeholder="1234567890, dd/mm/aaaa
0987654321, dd/mm/aaaa"
                            defaultValue={RGs}
                            onChange={HandleSetRGs}
                        />
                    </div>
                    <div className="form-vertical-div">
                        <label for="telefones">Telefones</label>
                        <textarea
                            name="telefones"
                            placeholder="(xx) xxxxx-xxxx
(yy) yyyyy-yyyy
(zz) zzzzz-zzzz"
                            defaultValue={telefones}
                            onBlur={HandleSetTelefones}
                        />
                    </div>
                </div>
                <div className="form-horizontal-div">
                    <button type="submit" onClick={HandleSubmit} className="sec-button form-button">Atualizar</button>
                </div>
            </form>
        </div>
    );
}