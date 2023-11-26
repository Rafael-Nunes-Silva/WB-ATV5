import { useState } from "react";
import "../css/form.css";
import { APICliente, APICPF, APIProduto, APIRG, APIServico, APITelefone } from "../../WB-ATV1/out/Interface/APIReact";
import Select from "../../components/select";

function Cadastrar(nome, nomeSocial, genero, CPFNumero, CPFDataEmissao, RGs, telefones, produtos, servicos) {
    APICliente.AdicionarCliente(
        nome,
        nomeSocial,
        genero,
        APICPF.NovoCPF(CPFNumero, new Date(CPFDataEmissao)),
        RGs,
        new Date().toLocaleDateString(),
        telefones,
        produtos,
        servicos
    );
}

export default function CadastroCliente() {
    const [nome, setNome] = useState("");
    const [nomeSocial, setNomeSocial] = useState("");
    const [genero, setGenero] = useState("");
    const [CPFNumero, setCPFNumero] = useState("");
    const [CPFDataEmissao, setCPFDataEmissao] = useState("");
    const [RGs, setRGs] = useState([]);
    const [telefones, setTelefones] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [servicos, setServicos] = useState([]);
    const [cpfInvalido, setCpfInvalido] = useState(false);

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
        Cadastrar(
            nome,
            nomeSocial,
            genero,
            CPFNumero,
            CPFDataEmissao,
            RGs,
            telefones,
            produtos,
            servicos
        );
    }

    return (
        // <form onSubmit={HandleSubmit} className="form">
        <form className="form">
            <div className="form-horizontal-div">
                <div className="form-vertical-div">
                    <label for="nome">Nome</label>
                    <input required
                        name="nome"
                        placeholder="Nome"
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
                        type="text"
                        onChange={(event) => { setNomeSocial(event.target.value) }}
                    />
                </div>
                <div className="form-vertical-div">
                    <label for="genero">Genero</label>
                    <input
                        name="genero"
                        placeholder="Genero"
                        type="text"
                        onChange={(event) => { setGenero(event.target.value) }}
                    />
                </div>
            </div>
            <div className="form-horizontal-div">
                <div className="form-vertical-div">
                    <label for="cpfNumero">CPF - Números</label>
                    <input required
                        name="cpfNumero"
                        placeholder="12345678910"
                        type="text"
                        maxLength={11}
                        onChange={(event) => {
                            if (event.target.value.length !== 11) {
                                setCpfInvalido(true);
                                return;
                            }

                            if (APICliente.GetClientes().filter((cliente) => cliente.CPF.valor === event.target.value) > 0) {
                                setCpfInvalido(true);
                                return;
                            }

                            setCpfInvalido(false);
                            setCPFNumero(event.target.value);
                        }}
                    />
                    {
                        cpfInvalido &&
                        <small className="alert-invalido">CPF inválido ou já cadastrado.</small>
                    }
                </div>
                <div className="form-vertical-div">
                    <label for="cpfDataEmissao">CPF - Emissão</label>
                    <input required
                        name="cpfDataEmissao"
                        placeholder="dd/mm/aaaa"
                        type="date"
                        onChange={(event) => { setCPFDataEmissao(event.target.value) }}
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
                        onBlur={HandleSetTelefones}
                    />
                </div>
            </div>
            <div className="form-horizontal-div">
                <div className="form-vertical-div">
                    <label for="produtos">Produtos</label>
                    <Select multiple
                        name="produtos"
                        options={APIProduto.GetProdutos().map(
                            (p) => ({ name: p.nome, value: p.valor })
                        )}
                        onChange={(event) => {
                            const prods = Array.from(event.target.selectedOptions).map(op => op.innerText);

                            const selec = APIProduto.GetProdutos().filter(prod =>
                                prods.includes(prod.nome)
                            );
                            setProdutos(selec);
                        }}
                    />
                </div>
                <div className="form-vertical-div">
                    <label for="servicos">Serviços</label>
                    <Select multiple
                        name="servicos"
                        options={APIServico.GetServicos().map(
                            (s) => ({ name: s.nome, value: s.valor })
                        )}
                        onChange={(event) => {
                            const servs = Array.from(event.target.selectedOptions).map(op => op.innerText);

                            const selec = APIServico.GetServicos().filter(serv =>
                                servs.includes(serv.nome)
                            );
                            setServicos(selec);
                        }}
                    />
                </div>
            </div>
            <div className="form-horizontal-div">
                {
                    !cpfInvalido &&
                    <button type="submit" onClick={HandleSubmit} className="sec-button">Cadastrar</button>
                }
            </div>
        </form>
    );
}