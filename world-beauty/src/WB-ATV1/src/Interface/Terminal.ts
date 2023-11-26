import CPFManager from "../Business/CPFManager";
import ClienteManager from "../Business/ClienteManager";
import Empresa from "../Business/Empresa";
import ProdutoManager from "../Business/ProdutoManager";
import RGManager from "../Business/RGManager";
import ServicoManager from "../Business/ServicoManager";
import TelefoneManager from "../Business/TelefoneManager";
import IOManager from "../IO/IOManager";
import RG from "../Models/RG";
import Telefone from "../Models/Telefone";

class Opcao {
    msg: string;
    func: Function;

    constructor(msg: string, func: Function) {
        this.msg = msg;
        this.func = func;
    }
}

class Menu {
    titulo: string;
    opcoes: Array<Opcao>;

    constructor(titulo: string, opcoes: Array<Opcao>) {
        this.titulo = titulo;
        this.opcoes = opcoes;
    }

    public Display() {
        console.log(`\n\n\n${this.titulo}:`);

        for (let i = 0; i < this.opcoes.length; i++) {
            console.log(`${i} - ${this.opcoes[i].msg}`)
        }

        let escolha = -1;
        do {
            escolha = IOManager.GetInt("Escolha");
        } while (escolha < 0 || escolha >= this.opcoes.length);

        this.opcoes[escolha].func();
    }
}

const MENU_CLIENTE_LISTAGEM = new Menu(
    "Listagem de Clientes",
    [
        new Opcao(
            "Voltar",
            function() {
                menuAtual = MENU_CLIENTE;
            }
        ),
        new Opcao(
            "Listar Todos",
            function() {
                console.log(
                    ClienteManager.MontarStringListagem(
                        Empresa.GetClientes
                    )
                );
            }
        ),
        new Opcao(
            "Listar Top X por Consumo de Produtos (Quantidade)",
            function() {
                const qtd = IOManager.GetInt("Quantidade (X)");
                console.log(
                    `\n\n${qtd} clientes que mais consumiram produtos (Quantidade)\n` + 
                    ClienteManager.MontarStringListagem(
                        Empresa.GetTopXClientesConsumoProdutoQtd(qtd)
                    )
                );
            }
        ),
        new Opcao(
            "Listar Top X por Consumo de Produtos (Valor)",
            function() {
                const qtd = IOManager.GetInt("Quantidade (X)");
                console.log(
                    `\n\n${qtd} clientes que mais consumiram produtos (Valor)\n` + 
                    ClienteManager.MontarStringListagem(
                        Empresa.GetTopXClientesConsumoProdutoVal(qtd)
                    )
                );
            }
        ),
        new Opcao(
            "Listar Sub X por Consumo de Produtos (Quantidade)",
            function() {
                const qtd = IOManager.GetInt("Quantidade");
                console.log(
                    `\n\n${qtd} clientes que menos consumiram produtos (Quantidade)\n` + 
                    ClienteManager.MontarStringListagem(
                        Empresa.GetSubXClientesConsumoProdutoQtd(qtd)
                    )
                );
            }
        ),
        new Opcao(
            "Listar Sub X por Consumo de Produtos (Valor)",
            function() {
                const qtd = IOManager.GetInt("Quantidade (X)");
                console.log(
                    `\n\n${qtd} clientes que menos consumiram produtos (Valor)\n` + 
                    ClienteManager.MontarStringListagem(
                        Empresa.GetSubXClientesConsumoProdutoVal(qtd)
                    )
                );
            }
        ),
        new Opcao(
            "Listar Top X por Consumo de Serviços (Quantidade)",
            function() {
                const qtd = IOManager.GetInt("Quantidade (X)");
                console.log(
                    `\n\n${qtd} clientes que mais consumiram serviços (Quantidade)\n` + 
                    ClienteManager.MontarStringListagem(
                        Empresa.GetTopXClientesConsumoServicoQtd(qtd)
                    )
                );
            }
        ),
        new Opcao(
            "Listar Top X por Consumo de Serviços (Valor)",
            function() {
                const qtd = IOManager.GetInt("Quantidade (X)");
                console.log(
                    `\n\n${qtd} clientes que mais consumiram serviços (Valor)\n` + 
                    ClienteManager.MontarStringListagem(
                        Empresa.GetTopXClientesConsumoServicoVal(qtd)
                    )
                );
            }
        ),
        new Opcao(
            "Listar Sub X por Consumo de Serviços (Quantidade)",
            function() {
                const qtd = IOManager.GetInt("Quantidade (X)");
                console.log(
                    `\n\n${qtd} clientes que menos consumiram serviços (Quantidade)\n` + 
                    ClienteManager.MontarStringListagem(
                        Empresa.GetSubXClientesConsumoServicoQtd(qtd)
                    )
                );
            }
        ),
        new Opcao(
            "Listar Sub X por Consumo de Serviços (Valor)",
            function() {
                const qtd = IOManager.GetInt("Quantidade (X)");
                console.log(
                    `\n\n${qtd} clientes que menos consumiram serviços (Valor)\n` + 
                    ClienteManager.MontarStringListagem(
                        Empresa.GetSubXClientesConsumoServicoVal(qtd)
                    )
                );
            }
        ),



        new Opcao(
            "Listar por Genero",
            function() {
                const genero = IOManager.GetString("Genero");
                console.log(
                    `\n\nClientes do genero ${genero}\n` + 
                    ClienteManager.MontarStringListagem(
                        Empresa.ClientesDoGenero(genero)
                    )
                );
            }
        )
    ]
);

const MENU_CLIENTE = new Menu(
    "Clientes",
    [
        new Opcao(
            "Voltar",
            function() {
                menuAtual = MENU_PRINCIPAL;
            }
        ),
        new Opcao(
            "Cadastrar",
            function() {
                Empresa.AdicionarCliente(
                    ClienteManager.NovoCliente()
                );
            }
        ),
        new Opcao(
            "Listagem",
            function() {
                menuAtual = MENU_CLIENTE_LISTAGEM;
            }
        ),
        new Opcao(
            "Atualizar",
            function() {
                const cpf = CPFManager.NovoCPF();
                const cliente = Empresa.GetClientes.find((c) => { return c.GetCPF == cpf })

                if (!cliente) {
                    console.log("CPF não cadastrado no sistema.");
                    return;
                }

                if (IOManager.GetBool("Alterar nome social?")) {
                    cliente.SetNomeSocial = IOManager.GetString("Nome Social");
                }
                if (IOManager.GetBool("Alterar o genero?")) {
                    cliente.SetGenero = IOManager.GetString("Genero");
                }
                if (IOManager.GetBool("Alterar os RGs?")) {
                    const RGs = Array<RG>(0);
                    do {
                        RGs.push(RGManager.NovoRG());
                    } while(IOManager.GetBool("Adicionar outro RG?"));
                    cliente.SetRGs = RGs;
                }
                if (IOManager.GetBool("Alterar os telefones?")) {
                    const telefones = Array<Telefone>(0);
                    do {
                        telefones.push(TelefoneManager.NovoTelefone());
                    } while(IOManager.GetBool("Adicionar outro telefone?"));
                    cliente.SetTelefones = telefones;
                }
            }
        ),
        new Opcao(
            "Deletar",
            function() {
                Empresa.DeletarCliente(CPFManager.NovoCPF());
            }
        )
    ]
);

const MENU_SERVICO = new Menu(
    "Serviços",
    [
        new Opcao(
            "Voltar",
            function() {
                menuAtual = MENU_PRINCIPAL;
            }
        ),
        new Opcao(
            "Cadastrar",
            function() {
                Empresa.AdicionarServico(
                    ServicoManager.NovoServico()
                );
            }
        ),
        new Opcao(
            "Listar Todos",
            function() {
                console.log(
                    ServicoManager.MontarStringListagem(
                        Empresa.GetServicos
                    )
                );
            }
        ),
        new Opcao(
            "Atualizar",
            function() {
                const nome = IOManager.GetString("Nome do serviço");
                const servico = Empresa.GetServicos.find((s) => { return s.GetNome == nome });

                if (!servico) {
                    console.log("Serviço não cadastrado no sistema.");
                    return;
                }

                servico.SetValor = IOManager.GetFloat("Valor do serviço");
            }
        ),
        new Opcao(
            "Deletar",
            function() {
                console.log("PORRA");
                Empresa.DeletarServico(IOManager.GetString("Insira o nome do serviço"));
            }
        )
    ]
);

const MENU_PRODUTO = new Menu(
    "Produtos",
    [
        new Opcao(
            "Voltar",
            function() {
                menuAtual = MENU_PRINCIPAL;
            }
        ),
        new Opcao(
            "Cadastrar",
            function() {
                Empresa.AdicionarProduto(
                    ProdutoManager.NovoProduto()
                );
            }
        ),
        new Opcao(
            "Listar Todos",
            function() {
                console.log(
                    ProdutoManager.MontarStringListagem(
                        Empresa.GetProdutos
                    )
                );
            }
        ),
        new Opcao(
            "Atualizar",
            function() {
                const nome = IOManager.GetString("Nome do produto");
                const produto = Empresa.GetProdutos.find((p) => { return p.GetNome == nome });

                if (!produto) {
                    console.log("Produto não cadastrado no sistema.");
                    return;
                }

                produto.SetValor = IOManager.GetFloat("Valor do produto");
            }
        ),
        new Opcao(
            "Deletar",
            function() {
                Empresa.DeletarProduto(IOManager.GetString("Insira o nome do produto"));
            }
        )
    ]
);

const MENU_PRINCIPAL = new Menu(
    "World Beauty",
    [
        new Opcao(
            "Sair",
            function() {
                menuAtual = null;
            }
        ),
        new Opcao(
            "Cliente",
            function() {
                menuAtual = MENU_CLIENTE;
            }
        ),
        new Opcao(
            "Produto",
            function() {
                menuAtual = MENU_PRODUTO;
            }
        ),
        new Opcao(
            "Serviço",
            function() {
                menuAtual = MENU_SERVICO;
            }
        )
    ]
);

let menuAtual: Menu | null = MENU_PRINCIPAL;

export default class Terminal {
    public static Start() {
        while(menuAtual != null) {
            menuAtual.Display();
        }
    }
}